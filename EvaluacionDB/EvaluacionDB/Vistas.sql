-- =====================================

alter view VResultadoColaboradorSkill
as
select 
ob.IdPlanOnBoarding,
c.IdColaborador, 
c.NombreColaborador, 
c.DPIColaborador, 
c.FechaIngreso, 
c.FechaAlta,

p.IdPuesto,
p.NombrePuesto,

a.IdArea,
a.NombreArea,

ob.FechaEvaluacion,
ob.FechaVencimiento,
ob.Realizado,
ob.NumeroEvaluacion,

avg(de.Nota) PuntuacionTotalSkill

from TColaborador c
join TPuesto p on c.IdPuesto = p.IdPuesto
join TArea a on p.IdArea = a.IdArea
left join TPlanOnBoarding ob on c.IdColaborador = ob.IdColaborador
left join TDetalleEvaluacion de on ob.IdPlanOnBoarding = de.IdPlanOnBoarding
left join TActividad ac on ac.IdActividad = de.IdActividad
left join TObjetivo o on o.IdObjetivo = ac.IdObjetivo
left join TTipoObjetivo tio on tio.IdTipoObjetivo = o.IdTipoObjetivo
where ob.NombreTipo ='Plan' and tio.IdTipoObjetivo = 2
group by 
ob.IdPlanOnBoarding,
c.IdColaborador, 
c.NombreColaborador, 
c.DPIColaborador, 
c.FechaIngreso, 
c.FechaAlta,

p.IdPuesto,
p.NombrePuesto,

a.IdArea,
a.NombreArea,

ob.FechaEvaluacion,
ob.FechaVencimiento,
ob.Realizado,
ob.NumeroEvaluacion

--=========================================================
alter view VResultadoColaboradorWill
as
select 
ob.IdPlanOnBoarding,
c.IdColaborador, 
c.NombreColaborador, 
c.DPIColaborador, 
c.FechaIngreso, 
c.FechaAlta,

p.IdPuesto,
p.NombrePuesto,

a.IdArea,
a.NombreArea,

ob.FechaEvaluacion,
ob.FechaVencimiento,
ob.Realizado,
ob.NumeroEvaluacion,

avg(de.Nota) PuntuacionTotalWill

from TColaborador c
join TPuesto p on c.IdPuesto = p.IdPuesto
join TArea a on p.IdArea = a.IdArea
left join TPlanOnBoarding ob on c.IdColaborador = ob.IdColaborador
left join TDetalleEvaluacion de on ob.IdPlanOnBoarding = de.IdPlanOnBoarding
left join TActividad ac on ac.IdActividad = de.IdActividad
left join TObjetivo o on o.IdObjetivo = ac.IdObjetivo
left join TTipoObjetivo tio on tio.IdTipoObjetivo = o.IdTipoObjetivo
where ob.NombreTipo ='Plan' and tio.IdTipoObjetivo = 1
group by 
ob.IdPlanOnBoarding,
c.IdColaborador, 
c.NombreColaborador, 
c.DPIColaborador, 
c.FechaIngreso, 
c.FechaAlta,

p.IdPuesto,
p.NombrePuesto,

a.IdArea,
a.NombreArea,

ob.FechaEvaluacion,
ob.FechaVencimiento,
ob.Realizado,
ob.NumeroEvaluacion


--=========================================================
create view VEscalasEmpleadoPlanOB
as
select 
c.IdColaborador, 
c.NombreColaborador, 
c.DPIColaborador, 
c.FechaIngreso, 
c.FechaAlta,

c.IdPuesto,
c.NombrePuesto,

c.IdArea,
c.NombreArea,

c.FechaEvaluacion,
c.FechaVencimiento,
c.Realizado,
c.NumeroEvaluacion,

c.PuntuacionTotalSkill,
--=IF(AC40<0.5,0,IF(AC40>=0.5,IF(AC40<0.7,1,IF(AC40>=0.7,IF(AC40<0.9,2,IF(AC40>=0.9,3))))))
(case 
	when c.PuntuacionTotalSkill <50 then 0 
	when c.PuntuacionTotalSkill >=50 and c.PuntuacionTotalSkill<70 then 1
	when c.PuntuacionTotalSkill >=70 and c.PuntuacionTotalSkill<90 then 2
	when c.PuntuacionTotalSkill >=90  then 3
	end
) as EscalaTecnica,
w.PuntuacionTotalWill,
--=IF(AC40<0.5,0,IF(AC40>=0.5,IF(AC40<0.7,1,IF(AC40>=0.7,IF(AC40<0.9,2,IF(AC40>=0.9,3))))))
(case 
	when w.PuntuacionTotalWill <50 then 0 
	when w.PuntuacionTotalWill >=50 and w.PuntuacionTotalWill<70 then 1
	when w.PuntuacionTotalWill >=70 and w.PuntuacionTotalWill<90 then 2
	when w.PuntuacionTotalWill >=90  then 3
	end
) as EscalaConductual,
(c.PuntuacionTotalSkill/2)+(w.PuntuacionTotalWill) as ResultadoFinal
from VResultadoColaboradorSkill c
join VResultadoColaboradorWill w on c.IdPlanOnBoarding = w.IdPlanOnBoarding

create View VCuadranteEmpleado
as
select * ,
(case 
	when w.EscalaConductual =0 and w.EscalaTecnica =0 then 0 
	when w.EscalaConductual =1 and w.EscalaTecnica =0 then 10 
	when w.EscalaConductual =2 and w.EscalaTecnica =0 then 20 
	when w.EscalaConductual =3 and w.EscalaTecnica =0 then 30 
	when w.EscalaConductual =0 and w.EscalaTecnica =1 then 1 
	when w.EscalaConductual =1 and w.EscalaTecnica =1 then 11 
	when w.EscalaConductual =2 and w.EscalaTecnica =1 then 21 
	when w.EscalaConductual =3 and w.EscalaTecnica =1 then 31 
	when w.EscalaConductual =0 and w.EscalaTecnica =2 then 2 
	when w.EscalaConductual =1 and w.EscalaTecnica =2 then 12 
	when w.EscalaConductual =2 and w.EscalaTecnica =2 then 22 
	when w.EscalaConductual =3 and w.EscalaTecnica =2 then 32 
	when w.EscalaConductual =0 and w.EscalaTecnica =3 then 3 
	when w.EscalaConductual =1 and w.EscalaTecnica =3 then 13 
	when w.EscalaConductual =2 and w.EscalaTecnica =3 then 23 
	when w.EscalaConductual =3 and w.EscalaTecnica =3 then 33 

	end
) as Cuadrante,
(case 
	when w.EscalaConductual =0 and w.EscalaTecnica =0 then 'Desvincular' 
	when w.EscalaConductual =1 and w.EscalaTecnica =0 then 'Desvincular' 
	when w.EscalaConductual =2 and w.EscalaTecnica =0 then 'Entrenar' 
	when w.EscalaConductual =3 and w.EscalaTecnica =0 then 'Entrenar'
	when w.EscalaConductual =0 and w.EscalaTecnica =1 then 'Desvincular'
	when w.EscalaConductual =1 and w.EscalaTecnica =1 then 'Desvincular' 
	when w.EscalaConductual =2 and w.EscalaTecnica =1 then 'Entrenar' 
	when w.EscalaConductual =3 and w.EscalaTecnica =1 then 'Entrenar' 
	when w.EscalaConductual =0 and w.EscalaTecnica =2 then 'Acompañamiento' 
	when w.EscalaConductual =1 and w.EscalaTecnica =2 then 'Acompañamiento' 
	when w.EscalaConductual =2 and w.EscalaTecnica =2 then 'OnBoarding'  
	when w.EscalaConductual =3 and w.EscalaTecnica =2 then 'OnBoarding'  
	when w.EscalaConductual =0 and w.EscalaTecnica =3 then 'Acompañamiento'
	when w.EscalaConductual =1 and w.EscalaTecnica =3 then 'Acompañamiento'
	when w.EscalaConductual =2 and w.EscalaTecnica =3 then 'OnBoarding'  
	when w.EscalaConductual =3 and w.EscalaTecnica =3 then 'OnBoarding'  

	end
) as Matriz
from VEscalasEmpleadoPlanOB w

select * from VCuadranteEmpleado