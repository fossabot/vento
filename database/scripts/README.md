# Prerequisites for script to run

Before executing the 'PrepareDB.ps1' file, run below prerequisite steps.
1. Check 'psql' is able to execute from command line, if not the define 'psql.exe' location under 'Path' Windows Environment variable.
   For Example: If the 'psql.exe' located under 'C:\Program Files\PostgreSQL\10\bin', then define this location in Windows Environment Variable called 'Path'.

2. As mentioned below execute the script.
   powershell -ExecutionPolicy ByPass -File .\PrepareDB.ps1

3. After running the script it will ask details about Database server, database user, database running port and password for database user. If you are not providing the details for Database server, database user and database running port it will consider default details as mentioned, but for password user has to provide correct value.