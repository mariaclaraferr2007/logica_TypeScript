//USUARIO======================================================
import { User } from "./models/User";
import { UserRepository } from "./repositories/UserRepository";

const userRepo = new UserRepository();

// Exibir usuários cadastrados
console.log("\n--- Usuários atualmente cadastrados ---");
const listaUsuarios = userRepo.getAll();
listaUsuarios.forEach((user) => console.log(user));

// Adicionar novo usuário
const usuarioCarol = new User(3, "Carol", "carol@email.com");
userRepo.add(usuarioCarol);
console.log("\nUsuário 'Carol' foi adicionado com sucesso!");

// Remover usuário com ID 1
userRepo.removeById(1);
console.log("\nO usuário com ID 1 foi removido do sistema.");

// Mostrar usuários atualizados
console.log("\n--- Lista de usuários após atualização ---");
userRepo.getAll().forEach((u) => console.log(u));
//====================================================================

//PACIENTE======================================================
import { Paciente } from "./models/Paciente";
import { PacienteRepository } from "./repositories/PacienteRepository";

const pacienteRepo = new PacienteRepository();

// Exibir pacientes registrados
console.log("\n--- Lista de pacientes no sistema ---");
const listaPacientes = pacienteRepo.getAll();
listaPacientes.forEach((paciente) => console.log(paciente));

// Adicionar novo paciente
const pacienteMaria = new Paciente(
  3,
  "Maria",
  "2000-09-23",
  "078.531.962-02",
  "31 9557 7982",
  "maria@email.com",
  5
);
pacienteRepo.add(pacienteMaria);
console.log("\nPaciente 'Maria' cadastrado com êxito!");

// Remover paciente com ID 1
pacienteRepo.removeById(1);
console.log("\nPaciente com ID 1 excluído do cadastro.");

// Mostrar pacientes atualizados
console.log("\n--- Pacientes atualizados ---");
pacienteRepo.getAll().forEach((p) => console.log(p));
//====================================================================

//MEDICO======================================================
import { Medico } from "./models/Medicos";
import { MedicoRepository } from "./repositories/MedicoRepository";

const medicoRepo = new MedicoRepository();

// Exibir médicos cadastrados
console.log("\n--- Relação de médicos ---");
const listaMedicos = medicoRepo.getAll();
listaMedicos.forEach((medico) => console.log(medico));

// Adicionar novo médico
const medicoAlister = new Medico(
  3,
  "Dr Alister",
  "CRM-MG 231654",
  4,
  "(31) 9557 7982",
  "maria@email.com"
);
medicoRepo.add(medicoAlister);
console.log("\nMédico 'Dr Alister' incluído com sucesso!");

// Remover médico com ID 1
medicoRepo.removeById(1);
console.log("\nMédico com ID 1 foi excluído do sistema.");

// Mostrar médicos atualizados
console.log("\n--- Médicos após atualização ---");
medicoRepo.getAll().forEach((m) => console.log(m));
//====================================================================

//CONSULTA======================================================
import { Consulta } from "./models/Consultas";
import { ConsultaRepository } from "./repositories/ConsultaRepository";

const consultaRepo = new ConsultaRepository();

// Exibir consultas registradas
console.log("\n--- Consultas atualmente agendadas ---");
const listaConsultas = consultaRepo.getAll();
listaConsultas.forEach((consulta) => console.log(consulta));

// Adicionar nova consulta
const novaConsulta = new Consulta(3, 25, 15, 1752206568398, "null");
consultaRepo.add(novaConsulta);
console.log("\nConsulta registrada com sucesso!");

// Remover consulta com ID 1
consultaRepo.removeById(1);
console.log("\nConsulta com ID 1 foi removida.");

// Mostrar consultas atualizadas
console.log("\n--- Consultas atualizadas ---");
consultaRepo.getAll().forEach((c) => console.log(c));
//====================================================================
