package com.dev.curso.controllers;

import com.dev.curso.dao.UsuarioDao;
import com.dev.curso.models.Usuario;
import com.dev.curso.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){
        Usuario userLog= usuarioDao.obtenerCredenciales(usuario);
        if (userLog != null){
            return jwtUtil.create(String.valueOf(userLog.getId()), userLog.getEmail());
        }
        return "fallo";

    }
}
