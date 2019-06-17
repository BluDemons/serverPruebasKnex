/* CREAR USUARIO */
CREATE USER prueba PASSWORD '1234';
ALTER ROLE prueba WITH SUPERUSER;
ALTER ROLE prueba WITH LOGIN;

/* CREAR DB POSGRESQL*/

CREATE DATABASE "Ignug"
    WITH 
    OWNER = prueba
    ENCODING = 'UTF8'
    LC_COLLATE = 'es_ES.UTF-8' //sino vale esta linea eliminar
    LC_CTYPE = 'es_ES.UTF-8'  //sino vale esta linea eliminar
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

/* CREAR SESIONES */

CREATE SCHEMA IF NOT EXISTS sesion AUTHORIZATION prueba;
CREATE SCHEMA IF NOT EXISTS estudiante AUTHORIZATION prueba;
CREATE SCHEMA IF NOT EXISTS docente AUTHORIZATION prueba;
CREATE SCHEMA IF NOT EXISTS sistema AUTHORIZATION prueba;
CREATE SCHEMA IF NOT EXISTS auditoria AUTHORIZATION prueba;
CREATE SCHEMA IF NOT EXISTS catalogo AUTHORIZATION prueba;
CREATE SCHEMA IF NOT EXISTS generales AUTHORIZATION prueba;


SET search_path TO
pg_catalog, public, sesion, estudiante, docente, sistema, auditoria, catalogo, generales;
