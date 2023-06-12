
select schema_name (tbl.schema_id) AS [Schema], -- para desplegar el nombre del schema
		tbl.object_id as [Object_id],			-- para desplegar el Id la tabla
		tbl.name as [NombreTabla]				-- para desplegar el nombre de la tabla
		from sys.tables as tbl					-- consultamos las tablas
		where SCHEMA_NAME (tbl.schema_id) = 'dbo' -- del schema CI
