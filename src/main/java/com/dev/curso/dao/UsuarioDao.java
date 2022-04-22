package com.dev.curso.dao;

import com.dev.curso.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario obtenerCredenciales(Usuario usuario);
}
