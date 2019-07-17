package org.gracehanin.newcomer.web.rest;

import org.gracehanin.newcomer.domain.NewComer;
import org.gracehanin.newcomer.repository.NewComerRepository;
import org.gracehanin.newcomer.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link org.gracehanin.newcomer.domain.NewComer}.
 */
@RestController
@RequestMapping("/api")
public class NewComerResource {

    private final Logger log = LoggerFactory.getLogger(NewComerResource.class);

    private static final String ENTITY_NAME = "newComer";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final NewComerRepository newComerRepository;

    public NewComerResource(NewComerRepository newComerRepository) {
        this.newComerRepository = newComerRepository;
    }

    /**
     * {@code POST  /new-comers} : Create a new newComer.
     *
     * @param newComer the newComer to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new newComer, or with status {@code 400 (Bad Request)} if the newComer has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/new-comers")
    public ResponseEntity<NewComer> createNewComer(@RequestBody NewComer newComer) throws URISyntaxException {
        log.debug("REST request to save NewComer : {}", newComer);
        if (newComer.getId() != null) {
            throw new BadRequestAlertException("A new newComer cannot already have an ID", ENTITY_NAME, "idexists");
        }
        NewComer result = newComerRepository.save(newComer);
        return ResponseEntity.created(new URI("/api/new-comers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /new-comers} : Updates an existing newComer.
     *
     * @param newComer the newComer to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated newComer,
     * or with status {@code 400 (Bad Request)} if the newComer is not valid,
     * or with status {@code 500 (Internal Server Error)} if the newComer couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/new-comers")
    public ResponseEntity<NewComer> updateNewComer(@RequestBody NewComer newComer) throws URISyntaxException {
        log.debug("REST request to update NewComer : {}", newComer);
        if (newComer.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        NewComer result = newComerRepository.save(newComer);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, newComer.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /new-comers} : get all the newComers.
     *
     * @param pageable the pagination information.
     * @param queryParams a {@link MultiValueMap} query parameters.
     * @param uriBuilder a {@link UriComponentsBuilder} URI builder.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of newComers in body.
     */
    @GetMapping("/new-comers")
    public ResponseEntity<List<NewComer>> getAllNewComers(Pageable pageable, @RequestParam MultiValueMap<String, String> queryParams, UriComponentsBuilder uriBuilder) {
        log.debug("REST request to get a page of NewComers");
        Page<NewComer> page = newComerRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(uriBuilder.queryParams(queryParams), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /new-comers/:id} : get the "id" newComer.
     *
     * @param id the id of the newComer to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the newComer, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/new-comers/{id}")
    public ResponseEntity<NewComer> getNewComer(@PathVariable Long id) {
        log.debug("REST request to get NewComer : {}", id);
        Optional<NewComer> newComer = newComerRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(newComer);
    }

    /**
     * {@code DELETE  /new-comers/:id} : delete the "id" newComer.
     *
     * @param id the id of the newComer to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/new-comers/{id}")
    public ResponseEntity<Void> deleteNewComer(@PathVariable Long id) {
        log.debug("REST request to delete NewComer : {}", id);
        newComerRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
