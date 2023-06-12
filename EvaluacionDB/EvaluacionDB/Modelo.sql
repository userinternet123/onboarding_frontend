-- ====================================================================================
-- Creación de tablas básicas


Create table TArea(
IdArea int identity primary key,
NombreArea nvarchar(max),
DescripcionArea nvarchar(max)
)
alter table Tarea add  UsuarioInserto nvarchar(50)
alter table Tarea add FechaInserto datetime
alter table Tarea add UsuarioModifico nvarchar(50)
alter table Tarea add FechaModifico datetime
alter table Tarea add Eliminado bit

Create table TPuesto(
IdPuesto int identity primary key,
NombrePuesto nvarchar(max),
DescripcionPuesto nvarchar(max),

IdArea int,
constraint fk_PuestoArea foreign key(IdArea) references TArea(IdArea)
)
alter table TPuesto add  UsuarioInserto nvarchar(50)
alter table TPuesto add FechaInserto datetime
alter table TPuesto add UsuarioModifico nvarchar(50)
alter table TPuesto add FechaModifico datetime
alter table TPuesto add Eliminado bit


Create table TColaborador(
IdColaborador int identity primary key,
NombreColaborador nvarchar(max),
ApellidoColaborador nvarchar(max),
DPIColaborador bigint,
FechaIngreso datetime,
FechaAlta dateTime,

IdPuesto int,
constraint fk_ColaboradorPuesto foreign key(IdPuesto) references TPuesto(IdPuesto)
)

alter table TColaborador add  UsuarioInserto nvarchar(50)
alter table TColaborador add FechaInserto datetime
alter table TColaborador add UsuarioModifico nvarchar(50)
alter table TColaborador add FechaModifico datetime
alter table TColaborador add Eliminado bit
-- ===
-- Técnicos 
-- Actitudes
Create table TTipoObjetivo(
IdTipoObjetivo int identity primary key,
NombreTipo nvarchar(max),
DescripcionTipo nvarchar(max)
)
alter table TTipoObjetivo add  UsuarioInserto nvarchar(50)
alter table TTipoObjetivo add FechaInserto datetime
alter table TTipoObjetivo add UsuarioModifico nvarchar(50)
alter table TTipoObjetivo add FechaModifico datetime
alter table TTipoObjetivo add Eliminado bit


Create table TObjetivo(
IdObjetivo int identity primary key, 
NombreObjetivo nvarchar(max),
DescripcionObjetivo nvarchar(max),

IdTipoObjetivo int,
constraint fk_ObjetivoTipoObjetivo foreign key (IdTipoObjetivo) references TTipoObjetivo(IdTipoObjetivo)
)
alter table TObjetivo add  UsuarioInserto nvarchar(50)
alter table TObjetivo add FechaInserto datetime
alter table TObjetivo add UsuarioModifico nvarchar(50)
alter table TObjetivo add FechaModifico datetime
alter table TObjetivo add Eliminado bit


Create table TActividad(
IdActividad int identity primary key,
NombreActividad nvarchar(max),
DescripcionActividad nvarchar(max),
Peso int,
DiasEvaluar int,

IdObjetivo int,
constraint fk_ActividadObjetivo foreign key(IdObjetivo) references TObjetivo(IdObjetivo)
)
alter table TActividad add  UsuarioInserto nvarchar(50)
alter table TActividad add FechaInserto datetime
alter table TActividad add UsuarioModifico nvarchar(50)
alter table TActividad add FechaModifico datetime
alter table TActividad add Eliminado bit



Create table TTipoOnboarding(
IdTipoOnBoarding int identity primary key,
NombreOnBoarding nvarchar(max)
)
alter table TTipoOnboarding add  UsuarioInserto nvarchar(50)
alter table TTipoOnboarding add FechaInserto datetime
alter table TTipoOnboarding add UsuarioModifico nvarchar(50)
alter table TTipoOnboarding add FechaModifico datetime
alter table TTipoOnboarding add Eliminado bit




create table TRecurso(
IdRecurso int identity primary key,
NombreRecurso nvarchar(max),
DescripcionRecurso nvarchar(max)
)
alter table TRecurso add  UsuarioInserto nvarchar(50)
alter table TRecurso add FechaInserto datetime
alter table TRecurso add UsuarioModifico nvarchar(50)
alter table TRecurso add FechaModifico datetime
alter table TRecurso add Eliminado bit

-- El tipo de asignación debe ser un campo fijo
-- asignación plantilla de puesto
-- asignación empleado activo o dado de alta
create table TAsignacion(
IdRecursoPuestoEmpleado int identity primary key,
TipoAsignacion bit, -- 

IdRecurso int,
IdPuesto int,
IdColaborador int,

constraint fk_rpeRecurso foreign key (IdRecurso) references TRecurso(IdRecurso),
constraint fk_rpePuesto foreign key (IdPuesto) references TPuesto(IdPuesto),
constraint fk_rpeColaborador foreign key (IdColaborador) references TColaborador(IdColaborador)
)
alter table TAsignacion add  UsuarioInserto nvarchar(50)
alter table TAsignacion add FechaInserto datetime
alter table TAsignacion add UsuarioModifico nvarchar(50)
alter table TAsignacion add FechaModifico datetime
alter table TAsignacion add Eliminado bit

-- ==================================================================================
-- operaciones del flujo
-- Se debe crear tipo plantilla y tipo plan en ejecución


Create table TPlanOnBoarding(
IdPlanOnBoarding int identity primary key,
NombreTipo nvarchar(max),

IdColaborador int,
IdPuesto int,
Constraint fk_planOnBoardingColaborador foreign key(IdColaborador) references TColaborador(IdColaborador),
Constraint fk_planOnBoardingPuesto foreign key(IdPuesto) references TPuesto(IdPuesto)
)
alter table TPlanOnBoarding add FechaEvaluacion datetime
alter table TPlanOnBoarding add FechaVencimiento datetime
Alter table TPlanOnBoarding add Realizado bit
Alter table TPlanOnBoarding add PuntuacionTotal int 
Alter table TPlanOnBoarding add EscalaTC int
Alter table TPlanOnBoarding add Puntuacion decimal
Alter table TPlanOnBoarding add ResultadoFinal decimal
alter table TPlanOnBoarding add EscalaWill int
alter table TPlanOnBoarding add EscalaSkill int
Alter table TPlanOnBoarding add Cuadrante nvarchar(50)
Alter table TPlanOnBoarding add NumeroEvaluacion int

alter table TPlanOnBoarding add  UsuarioInserto nvarchar(50)
alter table TPlanOnBoarding add FechaInserto datetime
alter table TPlanOnBoarding add UsuarioModifico nvarchar(50)
alter table TPlanOnBoarding add FechaModifico datetime
alter table TPlanOnBoarding add Eliminado bit



create table TDetalleEvaluacion(
IdDetalleEvaluacion int identity primary key,

IdActividad int,
IdPlanOnBoarding int,
constraint fk_EvaluacionActividad foreign key(IdActividad) references TActividad(IdActividad),
constraint fk_EvaluacionPlanOnBoarding foreign key(IdPlanOnBoarding) references TPlanOnBoarding(IdPlanOnBoarding)
)
alter table TDetalleEvaluacion add  UsuarioInserto nvarchar(50)
alter table TDetalleEvaluacion add FechaInserto datetime
alter table TDetalleEvaluacion add UsuarioModifico nvarchar(50)
alter table TDetalleEvaluacion add FechaModifico datetime
alter table TDetalleEvaluacion add Eliminado bit

alter table TDetalleEvaluacion add Punteo


