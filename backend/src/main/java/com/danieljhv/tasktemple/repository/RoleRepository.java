package com.danieljhv.tasktemple.repository;

import com.danieljhv.tasktemple.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
