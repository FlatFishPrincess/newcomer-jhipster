package org.gracehanin.newcomer.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

import org.gracehanin.newcomer.domain.enumeration.VisaStatus;

import org.gracehanin.newcomer.domain.enumeration.MemberLevel;

import org.gracehanin.newcomer.domain.enumeration.BaptismType;

/**
 * A NewComer.
 */
@Entity
@Table(name = "new_comer")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class NewComer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "visa_status")
    private VisaStatus visaStatus;

    @Column(name = "company")
    private String company;

    @Enumerated(EnumType.STRING)
    @Column(name = "member_level")
    private MemberLevel memberLevel;

    @Column(name = "mobile_phone")
    private String mobilePhone;

    @Column(name = "family_relation")
    private String familyRelation;

    @Column(name = "parent_id")
    private String parentId;

    @Column(name = "occupation")
    private String occupation;

    @Column(name = "k_first_name")
    private String kFirstName;

    @Column(name = "k_last_name")
    private String kLastName;

    @Column(name = "e_first_name")
    private String eFirstName;

    @Column(name = "e_last_name")
    private String eLastName;

    @Column(name = "previous_church")
    private String previousChurch;

    @Column(name = "car_number_1")
    private String carNumber1;

    @Column(name = "email")
    private String email;

    @Column(name = "province")
    private String province;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "country")
    private String country;

    @Column(name = "service_exp")
    private String serviceExp;

    @Column(name = "street_1")
    private String street1;

    @Column(name = "gender")
    private String gender;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "photo_url")
    private String photoUrl;

    @Column(name = "acquaintance")
    private String acquaintance;

    @Column(name = "home_phone")
    private String homePhone;

    @Column(name = "street_2")
    private String street2;

    @Column(name = "car_number_2")
    private String carNumber2;

    @Enumerated(EnumType.STRING)
    @Column(name = "baptism_type")
    private BaptismType baptismType;

    @Column(name = "baptism_churh")
    private String baptismChurh;

    @Column(name = "baptism_year")
    private Integer baptismYear;

    @Column(name = "registration_date")
    private LocalDate registrationDate;

    @Column(name = "is_delete")
    private Boolean isDelete;

    @Column(name = "is_submit")
    private Boolean isSubmit;

    @Column(name = "person_id")
    private String personId;

    @Column(name = "is_member")
    private String isMember;

    @Column(name = "note")
    private String note;

    @ManyToOne
    @JsonIgnoreProperties("newcomers")
    private City city;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public VisaStatus getVisaStatus() {
        return visaStatus;
    }

    public NewComer visaStatus(VisaStatus visaStatus) {
        this.visaStatus = visaStatus;
        return this;
    }

    public void setVisaStatus(VisaStatus visaStatus) {
        this.visaStatus = visaStatus;
    }

    public String getCompany() {
        return company;
    }

    public NewComer company(String company) {
        this.company = company;
        return this;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public MemberLevel getMemberLevel() {
        return memberLevel;
    }

    public NewComer memberLevel(MemberLevel memberLevel) {
        this.memberLevel = memberLevel;
        return this;
    }

    public void setMemberLevel(MemberLevel memberLevel) {
        this.memberLevel = memberLevel;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public NewComer mobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
        return this;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getFamilyRelation() {
        return familyRelation;
    }

    public NewComer familyRelation(String familyRelation) {
        this.familyRelation = familyRelation;
        return this;
    }

    public void setFamilyRelation(String familyRelation) {
        this.familyRelation = familyRelation;
    }

    public String getParentId() {
        return parentId;
    }

    public NewComer parentId(String parentId) {
        this.parentId = parentId;
        return this;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getOccupation() {
        return occupation;
    }

    public NewComer occupation(String occupation) {
        this.occupation = occupation;
        return this;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getkFirstName() {
        return kFirstName;
    }

    public NewComer kFirstName(String kFirstName) {
        this.kFirstName = kFirstName;
        return this;
    }

    public void setkFirstName(String kFirstName) {
        this.kFirstName = kFirstName;
    }

    public String getkLastName() {
        return kLastName;
    }

    public NewComer kLastName(String kLastName) {
        this.kLastName = kLastName;
        return this;
    }

    public void setkLastName(String kLastName) {
        this.kLastName = kLastName;
    }

    public String geteFirstName() {
        return eFirstName;
    }

    public NewComer eFirstName(String eFirstName) {
        this.eFirstName = eFirstName;
        return this;
    }

    public void seteFirstName(String eFirstName) {
        this.eFirstName = eFirstName;
    }

    public String geteLastName() {
        return eLastName;
    }

    public NewComer eLastName(String eLastName) {
        this.eLastName = eLastName;
        return this;
    }

    public void seteLastName(String eLastName) {
        this.eLastName = eLastName;
    }

    public String getPreviousChurch() {
        return previousChurch;
    }

    public NewComer previousChurch(String previousChurch) {
        this.previousChurch = previousChurch;
        return this;
    }

    public void setPreviousChurch(String previousChurch) {
        this.previousChurch = previousChurch;
    }

    public String getCarNumber1() {
        return carNumber1;
    }

    public NewComer carNumber1(String carNumber1) {
        this.carNumber1 = carNumber1;
        return this;
    }

    public void setCarNumber1(String carNumber1) {
        this.carNumber1 = carNumber1;
    }

    public String getEmail() {
        return email;
    }

    public NewComer email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProvince() {
        return province;
    }

    public NewComer province(String province) {
        this.province = province;
        return this;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public NewComer postalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return country;
    }

    public NewComer country(String country) {
        this.country = country;
        return this;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getServiceExp() {
        return serviceExp;
    }

    public NewComer serviceExp(String serviceExp) {
        this.serviceExp = serviceExp;
        return this;
    }

    public void setServiceExp(String serviceExp) {
        this.serviceExp = serviceExp;
    }

    public String getStreet1() {
        return street1;
    }

    public NewComer street1(String street1) {
        this.street1 = street1;
        return this;
    }

    public void setStreet1(String street1) {
        this.street1 = street1;
    }

    public String getGender() {
        return gender;
    }

    public NewComer gender(String gender) {
        this.gender = gender;
        return this;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public NewComer dateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public NewComer photoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public String getAcquaintance() {
        return acquaintance;
    }

    public NewComer acquaintance(String acquaintance) {
        this.acquaintance = acquaintance;
        return this;
    }

    public void setAcquaintance(String acquaintance) {
        this.acquaintance = acquaintance;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public NewComer homePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public String getStreet2() {
        return street2;
    }

    public NewComer street2(String street2) {
        this.street2 = street2;
        return this;
    }

    public void setStreet2(String street2) {
        this.street2 = street2;
    }

    public String getCarNumber2() {
        return carNumber2;
    }

    public NewComer carNumber2(String carNumber2) {
        this.carNumber2 = carNumber2;
        return this;
    }

    public void setCarNumber2(String carNumber2) {
        this.carNumber2 = carNumber2;
    }

    public BaptismType getBaptismType() {
        return baptismType;
    }

    public NewComer baptismType(BaptismType baptismType) {
        this.baptismType = baptismType;
        return this;
    }

    public void setBaptismType(BaptismType baptismType) {
        this.baptismType = baptismType;
    }

    public String getBaptismChurh() {
        return baptismChurh;
    }

    public NewComer baptismChurh(String baptismChurh) {
        this.baptismChurh = baptismChurh;
        return this;
    }

    public void setBaptismChurh(String baptismChurh) {
        this.baptismChurh = baptismChurh;
    }

    public Integer getBaptismYear() {
        return baptismYear;
    }

    public NewComer baptismYear(Integer baptismYear) {
        this.baptismYear = baptismYear;
        return this;
    }

    public void setBaptismYear(Integer baptismYear) {
        this.baptismYear = baptismYear;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }

    public NewComer registrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
        return this;
    }

    public void setRegistrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Boolean isIsDelete() {
        return isDelete;
    }

    public NewComer isDelete(Boolean isDelete) {
        this.isDelete = isDelete;
        return this;
    }

    public void setIsDelete(Boolean isDelete) {
        this.isDelete = isDelete;
    }

    public Boolean isIsSubmit() {
        return isSubmit;
    }

    public NewComer isSubmit(Boolean isSubmit) {
        this.isSubmit = isSubmit;
        return this;
    }

    public void setIsSubmit(Boolean isSubmit) {
        this.isSubmit = isSubmit;
    }

    public String getPersonId() {
        return personId;
    }

    public NewComer personId(String personId) {
        this.personId = personId;
        return this;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    public String getIsMember() {
        return isMember;
    }

    public NewComer isMember(String isMember) {
        this.isMember = isMember;
        return this;
    }

    public void setIsMember(String isMember) {
        this.isMember = isMember;
    }

    public String getNote() {
        return note;
    }

    public NewComer note(String note) {
        this.note = note;
        return this;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public City getCity() {
        return city;
    }

    public NewComer city(City city) {
        this.city = city;
        return this;
    }

    public void setCity(City city) {
        this.city = city;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof NewComer)) {
            return false;
        }
        return id != null && id.equals(((NewComer) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "NewComer{" +
            "id=" + getId() +
            ", visaStatus='" + getVisaStatus() + "'" +
            ", company='" + getCompany() + "'" +
            ", memberLevel='" + getMemberLevel() + "'" +
            ", mobilePhone='" + getMobilePhone() + "'" +
            ", familyRelation='" + getFamilyRelation() + "'" +
            ", parentId='" + getParentId() + "'" +
            ", occupation='" + getOccupation() + "'" +
            ", kFirstName='" + getkFirstName() + "'" +
            ", kLastName='" + getkLastName() + "'" +
            ", eFirstName='" + geteFirstName() + "'" +
            ", eLastName='" + geteLastName() + "'" +
            ", previousChurch='" + getPreviousChurch() + "'" +
            ", carNumber1='" + getCarNumber1() + "'" +
            ", email='" + getEmail() + "'" +
            ", province='" + getProvince() + "'" +
            ", postalCode='" + getPostalCode() + "'" +
            ", country='" + getCountry() + "'" +
            ", serviceExp='" + getServiceExp() + "'" +
            ", street1='" + getStreet1() + "'" +
            ", gender='" + getGender() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", photoUrl='" + getPhotoUrl() + "'" +
            ", acquaintance='" + getAcquaintance() + "'" +
            ", homePhone='" + getHomePhone() + "'" +
            ", street2='" + getStreet2() + "'" +
            ", carNumber2='" + getCarNumber2() + "'" +
            ", baptismType='" + getBaptismType() + "'" +
            ", baptismChurh='" + getBaptismChurh() + "'" +
            ", baptismYear=" + getBaptismYear() +
            ", registrationDate='" + getRegistrationDate() + "'" +
            ", isDelete='" + isIsDelete() + "'" +
            ", isSubmit='" + isIsSubmit() + "'" +
            ", personId='" + getPersonId() + "'" +
            ", isMember='" + getIsMember() + "'" +
            ", note='" + getNote() + "'" +
            "}";
    }
}
