use dbControlInversion
go

select schema_name (tbl.schema_id) AS [Schema], -- para desplegar el nombre del schema
		tbl.object_id as [Object_id],			-- para desplegar el Id la tabla
		tbl.name as [NombreTabla]				-- para desplegar el nombre de la tabla
		from sys.tables as tbl					-- consultamos las tablas
		where SCHEMA_NAME (tbl.schema_id) = 'CI' -- del schema CI

												--Hacemos el join con la descripcion de las tablas que son las columnas
select top(100) *from sys.all_columns as col
where col.object_id = 690101499

select * from sys.types as tipos
where tipos.system_type_id =56

------------------------------------------------------------------------------------
-- =============Generamos el diccionario de datos===============================
use dbMercadoEnergia 
go

select schema_name (tbl.schema_id) AS [Schema], -- tbl para desplegar el nombre del schema
		--tbl.object_id as [Object_id],			-- tbl para desplegar el Id la tabla
		tbl.object_id as [CodigoTabla],
		tbl.name as [NombreTabla],				-- tbl para desplegar el nombre de la tabla
		col.name as [NombreColumna],
		tipos.name as [TipoDato],
		col.max_length as [Length],
		col.is_nullable as [Nullable]
		from sys.tables as tbl
												-- hacemos la union con la informacion de las columnas
		join sys.all_columns as col
		on col.object_id = tbl.object_id
		join sys.types as tipos
		on col.system_type_id = tipos.system_type_id
		where SCHEMA_NAME (tbl.schema_id) = 'ME' 
		and tipos.name != 'sysname'-- del schema CI


------------------------------------------------------------------------------------		
--Consulta los procedimientos almacenados e información de parámetro de entrada.
SELECT SCHEMA_NAME(schema_id) AS schema_name  
    ,o.name AS object_name  
    ,o.type_desc  
    ,p.parameter_id  
    ,p.name AS parameter_name  
    ,TYPE_NAME(p.user_type_id) AS parameter_type  
    ,p.max_length  
    ,p.precision  
    ,p.scale  
    ,p.is_output  
FROM sys.objects AS o  
LEFT JOIN sys.parameters AS p ON o.object_id = p.object_id  
WHERE SCHEMA_NAME(schema_id) IN ('CI')
ORDER BY schema_name, object_name, p.parameter_id; 

------------------------------------------------------------------------------------
--Consulta los objetos, el tipo de objeto, la fecha en que se creó, fecha de modificación
--puede ser de un schema específico 
SELECT name AS object_name   
  ,SCHEMA_NAME(schema_id) AS schema_name  
  ,type_desc  
  ,create_date  
  ,modify_date  
FROM sys.objects  
WHERE modify_date < GETDATE()   
--AND SCHEMA_NAME(schema_id) IN ('SIA')
ORDER BY modify_date; 

