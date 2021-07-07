-- 1)
select * from City where citizenCount > 100000
go

-- 2)
select * from Country where name like 'A%';
go

-- 3)
select	cit.name as [city name],
		cit.citizenCount [city population],
		coun.continentName as [continent], 
		coun.name as [country],
		coun.code as [ISO code]
from City as cit
inner join Country as coun 
	on coun.countryId = cit.countryId
where coun.continentName = 'Europe'
order by cit.citizenCount asc;
go

-- 4)
delete from Country 
	where countryId 
	not in (
				select distinct countryId from City
			);
go

-- 5)
update Country
set Country.citizenCount = (
	select	sum(cit.citizenCount) as [soucet obyvatel mest]
	from City as cit
	inner join Country as coun
		on cit.countryId = coun.countryId
	where Country.name = coun.name
	group by cit.countryId
	)
go