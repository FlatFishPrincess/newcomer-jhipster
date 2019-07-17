package org.gracehanin.newcomer.web.rest;

import org.gracehanin.newcomer.NewcomerApp;
import org.gracehanin.newcomer.domain.NewComer;
import org.gracehanin.newcomer.repository.NewComerRepository;
import org.gracehanin.newcomer.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.gracehanin.newcomer.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.gracehanin.newcomer.domain.enumeration.VisaStatus;
import org.gracehanin.newcomer.domain.enumeration.MemberLevel;
import org.gracehanin.newcomer.domain.enumeration.BaptismType;
/**
 * Integration tests for the {@Link NewComerResource} REST controller.
 */
@SpringBootTest(classes = NewcomerApp.class)
public class NewComerResourceIT {

    private static final VisaStatus DEFAULT_VISA_STATUS = VisaStatus.None;
    private static final VisaStatus UPDATED_VISA_STATUS = VisaStatus.PermenantResident;

    private static final String DEFAULT_COMPANY = "AAAAAAAAAA";
    private static final String UPDATED_COMPANY = "BBBBBBBBBB";

    private static final MemberLevel DEFAULT_MEMBER_LEVEL = MemberLevel.None;
    private static final MemberLevel UPDATED_MEMBER_LEVEL = MemberLevel.GeneralServant;

    private static final String DEFAULT_MOBILE_PHONE = "AAAAAAAAAA";
    private static final String UPDATED_MOBILE_PHONE = "BBBBBBBBBB";

    private static final String DEFAULT_FAMILY_RELATION = "AAAAAAAAAA";
    private static final String UPDATED_FAMILY_RELATION = "BBBBBBBBBB";

    private static final String DEFAULT_PARENT_ID = "AAAAAAAAAA";
    private static final String UPDATED_PARENT_ID = "BBBBBBBBBB";

    private static final String DEFAULT_OCCUPATION = "AAAAAAAAAA";
    private static final String UPDATED_OCCUPATION = "BBBBBBBBBB";

    private static final String DEFAULT_K_FIRST_NAME = "AAAAAAAAAA";
    private static final String UPDATED_K_FIRST_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_K_LAST_NAME = "AAAAAAAAAA";
    private static final String UPDATED_K_LAST_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_E_FIRST_NAME = "AAAAAAAAAA";
    private static final String UPDATED_E_FIRST_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_E_LAST_NAME = "AAAAAAAAAA";
    private static final String UPDATED_E_LAST_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_PREVIOUS_CHURCH = "AAAAAAAAAA";
    private static final String UPDATED_PREVIOUS_CHURCH = "BBBBBBBBBB";

    private static final String DEFAULT_CAR_NUMBER_1 = "AAAAAAAAAA";
    private static final String UPDATED_CAR_NUMBER_1 = "BBBBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_PROVINCE = "AAAAAAAAAA";
    private static final String UPDATED_PROVINCE = "BBBBBBBBBB";

    private static final String DEFAULT_POSTAL_CODE = "AAAAAAAAAA";
    private static final String UPDATED_POSTAL_CODE = "BBBBBBBBBB";

    private static final String DEFAULT_COUNTRY = "AAAAAAAAAA";
    private static final String UPDATED_COUNTRY = "BBBBBBBBBB";

    private static final String DEFAULT_SERVICE_EXP = "AAAAAAAAAA";
    private static final String UPDATED_SERVICE_EXP = "BBBBBBBBBB";

    private static final String DEFAULT_STREET_1 = "AAAAAAAAAA";
    private static final String UPDATED_STREET_1 = "BBBBBBBBBB";

    private static final String DEFAULT_GENDER = "AAAAAAAAAA";
    private static final String UPDATED_GENDER = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE_OF_BIRTH = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_OF_BIRTH = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_PHOTO_URL = "AAAAAAAAAA";
    private static final String UPDATED_PHOTO_URL = "BBBBBBBBBB";

    private static final String DEFAULT_ACQUAINTANCE = "AAAAAAAAAA";
    private static final String UPDATED_ACQUAINTANCE = "BBBBBBBBBB";

    private static final String DEFAULT_HOME_PHONE = "AAAAAAAAAA";
    private static final String UPDATED_HOME_PHONE = "BBBBBBBBBB";

    private static final String DEFAULT_STREET_2 = "AAAAAAAAAA";
    private static final String UPDATED_STREET_2 = "BBBBBBBBBB";

    private static final String DEFAULT_CAR_NUMBER_2 = "AAAAAAAAAA";
    private static final String UPDATED_CAR_NUMBER_2 = "BBBBBBBBBB";

    private static final BaptismType DEFAULT_BAPTISM_TYPE = BaptismType.None;
    private static final BaptismType UPDATED_BAPTISM_TYPE = BaptismType.InfantBaptism;

    private static final String DEFAULT_BAPTISM_CHURH = "AAAAAAAAAA";
    private static final String UPDATED_BAPTISM_CHURH = "BBBBBBBBBB";

    private static final Integer DEFAULT_BAPTISM_YEAR = 1;
    private static final Integer UPDATED_BAPTISM_YEAR = 2;

    private static final LocalDate DEFAULT_REGISTRATION_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_REGISTRATION_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Boolean DEFAULT_IS_DELETE = false;
    private static final Boolean UPDATED_IS_DELETE = true;

    private static final Boolean DEFAULT_IS_SUBMIT = false;
    private static final Boolean UPDATED_IS_SUBMIT = true;

    private static final String DEFAULT_PERSON_ID = "AAAAAAAAAA";
    private static final String UPDATED_PERSON_ID = "BBBBBBBBBB";

    private static final String DEFAULT_IS_MEMBER = "AAAAAAAAAA";
    private static final String UPDATED_IS_MEMBER = "BBBBBBBBBB";

    private static final String DEFAULT_NOTE = "AAAAAAAAAA";
    private static final String UPDATED_NOTE = "BBBBBBBBBB";

    @Autowired
    private NewComerRepository newComerRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restNewComerMockMvc;

    private NewComer newComer;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final NewComerResource newComerResource = new NewComerResource(newComerRepository);
        this.restNewComerMockMvc = MockMvcBuilders.standaloneSetup(newComerResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static NewComer createEntity(EntityManager em) {
        NewComer newComer = new NewComer()
            .visaStatus(DEFAULT_VISA_STATUS)
            .company(DEFAULT_COMPANY)
            .memberLevel(DEFAULT_MEMBER_LEVEL)
            .mobilePhone(DEFAULT_MOBILE_PHONE)
            .familyRelation(DEFAULT_FAMILY_RELATION)
            .parentId(DEFAULT_PARENT_ID)
            .occupation(DEFAULT_OCCUPATION)
            .kFirstName(DEFAULT_K_FIRST_NAME)
            .kLastName(DEFAULT_K_LAST_NAME)
            .eFirstName(DEFAULT_E_FIRST_NAME)
            .eLastName(DEFAULT_E_LAST_NAME)
            .previousChurch(DEFAULT_PREVIOUS_CHURCH)
            .carNumber1(DEFAULT_CAR_NUMBER_1)
            .email(DEFAULT_EMAIL)
            .province(DEFAULT_PROVINCE)
            .postalCode(DEFAULT_POSTAL_CODE)
            .country(DEFAULT_COUNTRY)
            .serviceExp(DEFAULT_SERVICE_EXP)
            .street1(DEFAULT_STREET_1)
            .gender(DEFAULT_GENDER)
            .dateOfBirth(DEFAULT_DATE_OF_BIRTH)
            .photoUrl(DEFAULT_PHOTO_URL)
            .acquaintance(DEFAULT_ACQUAINTANCE)
            .homePhone(DEFAULT_HOME_PHONE)
            .street2(DEFAULT_STREET_2)
            .carNumber2(DEFAULT_CAR_NUMBER_2)
            .baptismType(DEFAULT_BAPTISM_TYPE)
            .baptismChurh(DEFAULT_BAPTISM_CHURH)
            .baptismYear(DEFAULT_BAPTISM_YEAR)
            .registrationDate(DEFAULT_REGISTRATION_DATE)
            .isDelete(DEFAULT_IS_DELETE)
            .isSubmit(DEFAULT_IS_SUBMIT)
            .personId(DEFAULT_PERSON_ID)
            .isMember(DEFAULT_IS_MEMBER)
            .note(DEFAULT_NOTE);
        return newComer;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static NewComer createUpdatedEntity(EntityManager em) {
        NewComer newComer = new NewComer()
            .visaStatus(UPDATED_VISA_STATUS)
            .company(UPDATED_COMPANY)
            .memberLevel(UPDATED_MEMBER_LEVEL)
            .mobilePhone(UPDATED_MOBILE_PHONE)
            .familyRelation(UPDATED_FAMILY_RELATION)
            .parentId(UPDATED_PARENT_ID)
            .occupation(UPDATED_OCCUPATION)
            .kFirstName(UPDATED_K_FIRST_NAME)
            .kLastName(UPDATED_K_LAST_NAME)
            .eFirstName(UPDATED_E_FIRST_NAME)
            .eLastName(UPDATED_E_LAST_NAME)
            .previousChurch(UPDATED_PREVIOUS_CHURCH)
            .carNumber1(UPDATED_CAR_NUMBER_1)
            .email(UPDATED_EMAIL)
            .province(UPDATED_PROVINCE)
            .postalCode(UPDATED_POSTAL_CODE)
            .country(UPDATED_COUNTRY)
            .serviceExp(UPDATED_SERVICE_EXP)
            .street1(UPDATED_STREET_1)
            .gender(UPDATED_GENDER)
            .dateOfBirth(UPDATED_DATE_OF_BIRTH)
            .photoUrl(UPDATED_PHOTO_URL)
            .acquaintance(UPDATED_ACQUAINTANCE)
            .homePhone(UPDATED_HOME_PHONE)
            .street2(UPDATED_STREET_2)
            .carNumber2(UPDATED_CAR_NUMBER_2)
            .baptismType(UPDATED_BAPTISM_TYPE)
            .baptismChurh(UPDATED_BAPTISM_CHURH)
            .baptismYear(UPDATED_BAPTISM_YEAR)
            .registrationDate(UPDATED_REGISTRATION_DATE)
            .isDelete(UPDATED_IS_DELETE)
            .isSubmit(UPDATED_IS_SUBMIT)
            .personId(UPDATED_PERSON_ID)
            .isMember(UPDATED_IS_MEMBER)
            .note(UPDATED_NOTE);
        return newComer;
    }

    @BeforeEach
    public void initTest() {
        newComer = createEntity(em);
    }

    @Test
    @Transactional
    public void createNewComer() throws Exception {
        int databaseSizeBeforeCreate = newComerRepository.findAll().size();

        // Create the NewComer
        restNewComerMockMvc.perform(post("/api/new-comers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(newComer)))
            .andExpect(status().isCreated());

        // Validate the NewComer in the database
        List<NewComer> newComerList = newComerRepository.findAll();
        assertThat(newComerList).hasSize(databaseSizeBeforeCreate + 1);
        NewComer testNewComer = newComerList.get(newComerList.size() - 1);
        assertThat(testNewComer.getVisaStatus()).isEqualTo(DEFAULT_VISA_STATUS);
        assertThat(testNewComer.getCompany()).isEqualTo(DEFAULT_COMPANY);
        assertThat(testNewComer.getMemberLevel()).isEqualTo(DEFAULT_MEMBER_LEVEL);
        assertThat(testNewComer.getMobilePhone()).isEqualTo(DEFAULT_MOBILE_PHONE);
        assertThat(testNewComer.getFamilyRelation()).isEqualTo(DEFAULT_FAMILY_RELATION);
        assertThat(testNewComer.getParentId()).isEqualTo(DEFAULT_PARENT_ID);
        assertThat(testNewComer.getOccupation()).isEqualTo(DEFAULT_OCCUPATION);
        assertThat(testNewComer.getkFirstName()).isEqualTo(DEFAULT_K_FIRST_NAME);
        assertThat(testNewComer.getkLastName()).isEqualTo(DEFAULT_K_LAST_NAME);
        assertThat(testNewComer.geteFirstName()).isEqualTo(DEFAULT_E_FIRST_NAME);
        assertThat(testNewComer.geteLastName()).isEqualTo(DEFAULT_E_LAST_NAME);
        assertThat(testNewComer.getPreviousChurch()).isEqualTo(DEFAULT_PREVIOUS_CHURCH);
        assertThat(testNewComer.getCarNumber1()).isEqualTo(DEFAULT_CAR_NUMBER_1);
        assertThat(testNewComer.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testNewComer.getProvince()).isEqualTo(DEFAULT_PROVINCE);
        assertThat(testNewComer.getPostalCode()).isEqualTo(DEFAULT_POSTAL_CODE);
        assertThat(testNewComer.getCountry()).isEqualTo(DEFAULT_COUNTRY);
        assertThat(testNewComer.getServiceExp()).isEqualTo(DEFAULT_SERVICE_EXP);
        assertThat(testNewComer.getStreet1()).isEqualTo(DEFAULT_STREET_1);
        assertThat(testNewComer.getGender()).isEqualTo(DEFAULT_GENDER);
        assertThat(testNewComer.getDateOfBirth()).isEqualTo(DEFAULT_DATE_OF_BIRTH);
        assertThat(testNewComer.getPhotoUrl()).isEqualTo(DEFAULT_PHOTO_URL);
        assertThat(testNewComer.getAcquaintance()).isEqualTo(DEFAULT_ACQUAINTANCE);
        assertThat(testNewComer.getHomePhone()).isEqualTo(DEFAULT_HOME_PHONE);
        assertThat(testNewComer.getStreet2()).isEqualTo(DEFAULT_STREET_2);
        assertThat(testNewComer.getCarNumber2()).isEqualTo(DEFAULT_CAR_NUMBER_2);
        assertThat(testNewComer.getBaptismType()).isEqualTo(DEFAULT_BAPTISM_TYPE);
        assertThat(testNewComer.getBaptismChurh()).isEqualTo(DEFAULT_BAPTISM_CHURH);
        assertThat(testNewComer.getBaptismYear()).isEqualTo(DEFAULT_BAPTISM_YEAR);
        assertThat(testNewComer.getRegistrationDate()).isEqualTo(DEFAULT_REGISTRATION_DATE);
        assertThat(testNewComer.isIsDelete()).isEqualTo(DEFAULT_IS_DELETE);
        assertThat(testNewComer.isIsSubmit()).isEqualTo(DEFAULT_IS_SUBMIT);
        assertThat(testNewComer.getPersonId()).isEqualTo(DEFAULT_PERSON_ID);
        assertThat(testNewComer.getIsMember()).isEqualTo(DEFAULT_IS_MEMBER);
        assertThat(testNewComer.getNote()).isEqualTo(DEFAULT_NOTE);
    }

    @Test
    @Transactional
    public void createNewComerWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = newComerRepository.findAll().size();

        // Create the NewComer with an existing ID
        newComer.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restNewComerMockMvc.perform(post("/api/new-comers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(newComer)))
            .andExpect(status().isBadRequest());

        // Validate the NewComer in the database
        List<NewComer> newComerList = newComerRepository.findAll();
        assertThat(newComerList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllNewComers() throws Exception {
        // Initialize the database
        newComerRepository.saveAndFlush(newComer);

        // Get all the newComerList
        restNewComerMockMvc.perform(get("/api/new-comers?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(newComer.getId().intValue())))
            .andExpect(jsonPath("$.[*].visaStatus").value(hasItem(DEFAULT_VISA_STATUS.toString())))
            .andExpect(jsonPath("$.[*].company").value(hasItem(DEFAULT_COMPANY.toString())))
            .andExpect(jsonPath("$.[*].memberLevel").value(hasItem(DEFAULT_MEMBER_LEVEL.toString())))
            .andExpect(jsonPath("$.[*].mobilePhone").value(hasItem(DEFAULT_MOBILE_PHONE.toString())))
            .andExpect(jsonPath("$.[*].familyRelation").value(hasItem(DEFAULT_FAMILY_RELATION.toString())))
            .andExpect(jsonPath("$.[*].parentId").value(hasItem(DEFAULT_PARENT_ID.toString())))
            .andExpect(jsonPath("$.[*].occupation").value(hasItem(DEFAULT_OCCUPATION.toString())))
            .andExpect(jsonPath("$.[*].kFirstName").value(hasItem(DEFAULT_K_FIRST_NAME.toString())))
            .andExpect(jsonPath("$.[*].kLastName").value(hasItem(DEFAULT_K_LAST_NAME.toString())))
            .andExpect(jsonPath("$.[*].eFirstName").value(hasItem(DEFAULT_E_FIRST_NAME.toString())))
            .andExpect(jsonPath("$.[*].eLastName").value(hasItem(DEFAULT_E_LAST_NAME.toString())))
            .andExpect(jsonPath("$.[*].previousChurch").value(hasItem(DEFAULT_PREVIOUS_CHURCH.toString())))
            .andExpect(jsonPath("$.[*].carNumber1").value(hasItem(DEFAULT_CAR_NUMBER_1.toString())))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL.toString())))
            .andExpect(jsonPath("$.[*].province").value(hasItem(DEFAULT_PROVINCE.toString())))
            .andExpect(jsonPath("$.[*].postalCode").value(hasItem(DEFAULT_POSTAL_CODE.toString())))
            .andExpect(jsonPath("$.[*].country").value(hasItem(DEFAULT_COUNTRY.toString())))
            .andExpect(jsonPath("$.[*].serviceExp").value(hasItem(DEFAULT_SERVICE_EXP.toString())))
            .andExpect(jsonPath("$.[*].street1").value(hasItem(DEFAULT_STREET_1.toString())))
            .andExpect(jsonPath("$.[*].gender").value(hasItem(DEFAULT_GENDER.toString())))
            .andExpect(jsonPath("$.[*].dateOfBirth").value(hasItem(DEFAULT_DATE_OF_BIRTH.toString())))
            .andExpect(jsonPath("$.[*].photoUrl").value(hasItem(DEFAULT_PHOTO_URL.toString())))
            .andExpect(jsonPath("$.[*].acquaintance").value(hasItem(DEFAULT_ACQUAINTANCE.toString())))
            .andExpect(jsonPath("$.[*].homePhone").value(hasItem(DEFAULT_HOME_PHONE.toString())))
            .andExpect(jsonPath("$.[*].street2").value(hasItem(DEFAULT_STREET_2.toString())))
            .andExpect(jsonPath("$.[*].carNumber2").value(hasItem(DEFAULT_CAR_NUMBER_2.toString())))
            .andExpect(jsonPath("$.[*].baptismType").value(hasItem(DEFAULT_BAPTISM_TYPE.toString())))
            .andExpect(jsonPath("$.[*].baptismChurh").value(hasItem(DEFAULT_BAPTISM_CHURH.toString())))
            .andExpect(jsonPath("$.[*].baptismYear").value(hasItem(DEFAULT_BAPTISM_YEAR)))
            .andExpect(jsonPath("$.[*].registrationDate").value(hasItem(DEFAULT_REGISTRATION_DATE.toString())))
            .andExpect(jsonPath("$.[*].isDelete").value(hasItem(DEFAULT_IS_DELETE.booleanValue())))
            .andExpect(jsonPath("$.[*].isSubmit").value(hasItem(DEFAULT_IS_SUBMIT.booleanValue())))
            .andExpect(jsonPath("$.[*].personId").value(hasItem(DEFAULT_PERSON_ID.toString())))
            .andExpect(jsonPath("$.[*].isMember").value(hasItem(DEFAULT_IS_MEMBER.toString())))
            .andExpect(jsonPath("$.[*].note").value(hasItem(DEFAULT_NOTE.toString())));
    }
    
    @Test
    @Transactional
    public void getNewComer() throws Exception {
        // Initialize the database
        newComerRepository.saveAndFlush(newComer);

        // Get the newComer
        restNewComerMockMvc.perform(get("/api/new-comers/{id}", newComer.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(newComer.getId().intValue()))
            .andExpect(jsonPath("$.visaStatus").value(DEFAULT_VISA_STATUS.toString()))
            .andExpect(jsonPath("$.company").value(DEFAULT_COMPANY.toString()))
            .andExpect(jsonPath("$.memberLevel").value(DEFAULT_MEMBER_LEVEL.toString()))
            .andExpect(jsonPath("$.mobilePhone").value(DEFAULT_MOBILE_PHONE.toString()))
            .andExpect(jsonPath("$.familyRelation").value(DEFAULT_FAMILY_RELATION.toString()))
            .andExpect(jsonPath("$.parentId").value(DEFAULT_PARENT_ID.toString()))
            .andExpect(jsonPath("$.occupation").value(DEFAULT_OCCUPATION.toString()))
            .andExpect(jsonPath("$.kFirstName").value(DEFAULT_K_FIRST_NAME.toString()))
            .andExpect(jsonPath("$.kLastName").value(DEFAULT_K_LAST_NAME.toString()))
            .andExpect(jsonPath("$.eFirstName").value(DEFAULT_E_FIRST_NAME.toString()))
            .andExpect(jsonPath("$.eLastName").value(DEFAULT_E_LAST_NAME.toString()))
            .andExpect(jsonPath("$.previousChurch").value(DEFAULT_PREVIOUS_CHURCH.toString()))
            .andExpect(jsonPath("$.carNumber1").value(DEFAULT_CAR_NUMBER_1.toString()))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL.toString()))
            .andExpect(jsonPath("$.province").value(DEFAULT_PROVINCE.toString()))
            .andExpect(jsonPath("$.postalCode").value(DEFAULT_POSTAL_CODE.toString()))
            .andExpect(jsonPath("$.country").value(DEFAULT_COUNTRY.toString()))
            .andExpect(jsonPath("$.serviceExp").value(DEFAULT_SERVICE_EXP.toString()))
            .andExpect(jsonPath("$.street1").value(DEFAULT_STREET_1.toString()))
            .andExpect(jsonPath("$.gender").value(DEFAULT_GENDER.toString()))
            .andExpect(jsonPath("$.dateOfBirth").value(DEFAULT_DATE_OF_BIRTH.toString()))
            .andExpect(jsonPath("$.photoUrl").value(DEFAULT_PHOTO_URL.toString()))
            .andExpect(jsonPath("$.acquaintance").value(DEFAULT_ACQUAINTANCE.toString()))
            .andExpect(jsonPath("$.homePhone").value(DEFAULT_HOME_PHONE.toString()))
            .andExpect(jsonPath("$.street2").value(DEFAULT_STREET_2.toString()))
            .andExpect(jsonPath("$.carNumber2").value(DEFAULT_CAR_NUMBER_2.toString()))
            .andExpect(jsonPath("$.baptismType").value(DEFAULT_BAPTISM_TYPE.toString()))
            .andExpect(jsonPath("$.baptismChurh").value(DEFAULT_BAPTISM_CHURH.toString()))
            .andExpect(jsonPath("$.baptismYear").value(DEFAULT_BAPTISM_YEAR))
            .andExpect(jsonPath("$.registrationDate").value(DEFAULT_REGISTRATION_DATE.toString()))
            .andExpect(jsonPath("$.isDelete").value(DEFAULT_IS_DELETE.booleanValue()))
            .andExpect(jsonPath("$.isSubmit").value(DEFAULT_IS_SUBMIT.booleanValue()))
            .andExpect(jsonPath("$.personId").value(DEFAULT_PERSON_ID.toString()))
            .andExpect(jsonPath("$.isMember").value(DEFAULT_IS_MEMBER.toString()))
            .andExpect(jsonPath("$.note").value(DEFAULT_NOTE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingNewComer() throws Exception {
        // Get the newComer
        restNewComerMockMvc.perform(get("/api/new-comers/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateNewComer() throws Exception {
        // Initialize the database
        newComerRepository.saveAndFlush(newComer);

        int databaseSizeBeforeUpdate = newComerRepository.findAll().size();

        // Update the newComer
        NewComer updatedNewComer = newComerRepository.findById(newComer.getId()).get();
        // Disconnect from session so that the updates on updatedNewComer are not directly saved in db
        em.detach(updatedNewComer);
        updatedNewComer
            .visaStatus(UPDATED_VISA_STATUS)
            .company(UPDATED_COMPANY)
            .memberLevel(UPDATED_MEMBER_LEVEL)
            .mobilePhone(UPDATED_MOBILE_PHONE)
            .familyRelation(UPDATED_FAMILY_RELATION)
            .parentId(UPDATED_PARENT_ID)
            .occupation(UPDATED_OCCUPATION)
            .kFirstName(UPDATED_K_FIRST_NAME)
            .kLastName(UPDATED_K_LAST_NAME)
            .eFirstName(UPDATED_E_FIRST_NAME)
            .eLastName(UPDATED_E_LAST_NAME)
            .previousChurch(UPDATED_PREVIOUS_CHURCH)
            .carNumber1(UPDATED_CAR_NUMBER_1)
            .email(UPDATED_EMAIL)
            .province(UPDATED_PROVINCE)
            .postalCode(UPDATED_POSTAL_CODE)
            .country(UPDATED_COUNTRY)
            .serviceExp(UPDATED_SERVICE_EXP)
            .street1(UPDATED_STREET_1)
            .gender(UPDATED_GENDER)
            .dateOfBirth(UPDATED_DATE_OF_BIRTH)
            .photoUrl(UPDATED_PHOTO_URL)
            .acquaintance(UPDATED_ACQUAINTANCE)
            .homePhone(UPDATED_HOME_PHONE)
            .street2(UPDATED_STREET_2)
            .carNumber2(UPDATED_CAR_NUMBER_2)
            .baptismType(UPDATED_BAPTISM_TYPE)
            .baptismChurh(UPDATED_BAPTISM_CHURH)
            .baptismYear(UPDATED_BAPTISM_YEAR)
            .registrationDate(UPDATED_REGISTRATION_DATE)
            .isDelete(UPDATED_IS_DELETE)
            .isSubmit(UPDATED_IS_SUBMIT)
            .personId(UPDATED_PERSON_ID)
            .isMember(UPDATED_IS_MEMBER)
            .note(UPDATED_NOTE);

        restNewComerMockMvc.perform(put("/api/new-comers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedNewComer)))
            .andExpect(status().isOk());

        // Validate the NewComer in the database
        List<NewComer> newComerList = newComerRepository.findAll();
        assertThat(newComerList).hasSize(databaseSizeBeforeUpdate);
        NewComer testNewComer = newComerList.get(newComerList.size() - 1);
        assertThat(testNewComer.getVisaStatus()).isEqualTo(UPDATED_VISA_STATUS);
        assertThat(testNewComer.getCompany()).isEqualTo(UPDATED_COMPANY);
        assertThat(testNewComer.getMemberLevel()).isEqualTo(UPDATED_MEMBER_LEVEL);
        assertThat(testNewComer.getMobilePhone()).isEqualTo(UPDATED_MOBILE_PHONE);
        assertThat(testNewComer.getFamilyRelation()).isEqualTo(UPDATED_FAMILY_RELATION);
        assertThat(testNewComer.getParentId()).isEqualTo(UPDATED_PARENT_ID);
        assertThat(testNewComer.getOccupation()).isEqualTo(UPDATED_OCCUPATION);
        assertThat(testNewComer.getkFirstName()).isEqualTo(UPDATED_K_FIRST_NAME);
        assertThat(testNewComer.getkLastName()).isEqualTo(UPDATED_K_LAST_NAME);
        assertThat(testNewComer.geteFirstName()).isEqualTo(UPDATED_E_FIRST_NAME);
        assertThat(testNewComer.geteLastName()).isEqualTo(UPDATED_E_LAST_NAME);
        assertThat(testNewComer.getPreviousChurch()).isEqualTo(UPDATED_PREVIOUS_CHURCH);
        assertThat(testNewComer.getCarNumber1()).isEqualTo(UPDATED_CAR_NUMBER_1);
        assertThat(testNewComer.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testNewComer.getProvince()).isEqualTo(UPDATED_PROVINCE);
        assertThat(testNewComer.getPostalCode()).isEqualTo(UPDATED_POSTAL_CODE);
        assertThat(testNewComer.getCountry()).isEqualTo(UPDATED_COUNTRY);
        assertThat(testNewComer.getServiceExp()).isEqualTo(UPDATED_SERVICE_EXP);
        assertThat(testNewComer.getStreet1()).isEqualTo(UPDATED_STREET_1);
        assertThat(testNewComer.getGender()).isEqualTo(UPDATED_GENDER);
        assertThat(testNewComer.getDateOfBirth()).isEqualTo(UPDATED_DATE_OF_BIRTH);
        assertThat(testNewComer.getPhotoUrl()).isEqualTo(UPDATED_PHOTO_URL);
        assertThat(testNewComer.getAcquaintance()).isEqualTo(UPDATED_ACQUAINTANCE);
        assertThat(testNewComer.getHomePhone()).isEqualTo(UPDATED_HOME_PHONE);
        assertThat(testNewComer.getStreet2()).isEqualTo(UPDATED_STREET_2);
        assertThat(testNewComer.getCarNumber2()).isEqualTo(UPDATED_CAR_NUMBER_2);
        assertThat(testNewComer.getBaptismType()).isEqualTo(UPDATED_BAPTISM_TYPE);
        assertThat(testNewComer.getBaptismChurh()).isEqualTo(UPDATED_BAPTISM_CHURH);
        assertThat(testNewComer.getBaptismYear()).isEqualTo(UPDATED_BAPTISM_YEAR);
        assertThat(testNewComer.getRegistrationDate()).isEqualTo(UPDATED_REGISTRATION_DATE);
        assertThat(testNewComer.isIsDelete()).isEqualTo(UPDATED_IS_DELETE);
        assertThat(testNewComer.isIsSubmit()).isEqualTo(UPDATED_IS_SUBMIT);
        assertThat(testNewComer.getPersonId()).isEqualTo(UPDATED_PERSON_ID);
        assertThat(testNewComer.getIsMember()).isEqualTo(UPDATED_IS_MEMBER);
        assertThat(testNewComer.getNote()).isEqualTo(UPDATED_NOTE);
    }

    @Test
    @Transactional
    public void updateNonExistingNewComer() throws Exception {
        int databaseSizeBeforeUpdate = newComerRepository.findAll().size();

        // Create the NewComer

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restNewComerMockMvc.perform(put("/api/new-comers")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(newComer)))
            .andExpect(status().isBadRequest());

        // Validate the NewComer in the database
        List<NewComer> newComerList = newComerRepository.findAll();
        assertThat(newComerList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteNewComer() throws Exception {
        // Initialize the database
        newComerRepository.saveAndFlush(newComer);

        int databaseSizeBeforeDelete = newComerRepository.findAll().size();

        // Delete the newComer
        restNewComerMockMvc.perform(delete("/api/new-comers/{id}", newComer.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<NewComer> newComerList = newComerRepository.findAll();
        assertThat(newComerList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(NewComer.class);
        NewComer newComer1 = new NewComer();
        newComer1.setId(1L);
        NewComer newComer2 = new NewComer();
        newComer2.setId(newComer1.getId());
        assertThat(newComer1).isEqualTo(newComer2);
        newComer2.setId(2L);
        assertThat(newComer1).isNotEqualTo(newComer2);
        newComer1.setId(null);
        assertThat(newComer1).isNotEqualTo(newComer2);
    }
}
