package org.gracehanin.newcomer.repository;

import org.gracehanin.newcomer.domain.NewComer;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the NewComer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NewComerRepository extends JpaRepository<NewComer, Long> {

}
