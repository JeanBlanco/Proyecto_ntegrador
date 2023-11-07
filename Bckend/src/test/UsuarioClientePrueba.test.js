import request from 'supertest';
import app from './app';


describe('UsuarioCliente', () => {
describe('POST /crear-usuario-cliente', () => {
    test('debería crear un usuario cliente con los datos válidos', async () => {
    const datos = {
        nombre: 'Juan',
        apellido: 'Pérez',
        usuario: 'juanperez',
        email: 'juanperez@gmail.com',
        contraseña: '123456',
        fechaNacimiento: '1990-01-01',
        numeroTelefono: 1234567890,
        documentoId: 12345678,
    };

    const res = await request(app)
        .post('/crear-usuario-cliente')
        .send(datos);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('msg', 'Usuario cliente creado correctamente');
    expect(res.body).toHaveProperty('usuario');
    expect(res.body.usuario).toMatchObject(datos);
    });

    test('debería devolver un error si el email ya está registrado', async () => {
    const datos = {
        nombre: 'Ana',
        apellido: 'García',
        usuario: 'anagarcia',
        email: 'juanperez@gmail.com', // email repetido
        contraseña: '123456',
        fechaNacimiento: '1992-02-02',
        numeroTelefono: 9876543210,
        documentoId: 87654321,
    };

    const res = await request(app)
        .post('/crear-usuario-cliente')
        .send(datos);

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('msg', 'El email ya está registrado');
    });

    test('debería devolver un error si algún campo es inválido o faltante', async () => {
    const datos = {
        nombre: '', // campo vacío
        apellido: 'García',
        usuario: 'anagarcia',
        email: 'anagarcia@gmail.com',
        contraseña: '123', // contraseña corta
        fechaNacimiento: '1992-02-02',
        numeroTelefono: '9876543210', // número como string
        // documentoId: 87654321, // campo faltante
    };

    const res = await request(app)
        .post('/crear-usuario-cliente')
        .send(datos);

    expect(res.status).toBe(422);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors).toHaveLength(4);
    expect(res.body.errors[0]).toHaveProperty('msg', 'El nombre es obligatorio');
    expect(res.body.errors[1]).toHaveProperty(
        'msg',
        'La contraseña debe tener al menos 6 caracteres'
    );
    expect(res.body.errors[2]).toHaveProperty(
        'msg',
        'El número de teléfono debe ser numérico'
    );
    expect(res.body.errors[3]).toHaveProperty(
        'msg',
        'El documento de identidad es obligatorio'
    );
    });
});
});
