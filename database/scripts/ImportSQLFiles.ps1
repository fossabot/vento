While ( ($Null -eq $DB_SERVER) -or ($DB_SERVER -eq '') ) {
  $DB_SERVER = Read-Host -Prompt "Specify Postgres running host"
}

While ( ($Null -eq $DB_USER) -or ($DB_USER -eq '') ) {
  $DB_USER = Read-Host -Prompt "Specify Postgres user"
}

$defaultPort = 5432
$DB_PORT = Read-Host "Specify Postgres Running Port [$($defaultPort)]"
$DB_PORT = ($defaultPort,$DB_PORT)[[bool]$DB_PORT]

if ([string]::IsNullOrWhiteSpace($DB_PORT)) {
  $port = 5432
}

$host1 = "-h$DB_SERVER"
$user = "-U$DB_USER"
$port = "-p$DB_PORT"
$dbname = "-dinventory"

psql $host1 $port $user -W -f '../queries/create_db_user.sql'

psql $host1 $port $user -f '../queries/create_db.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_department.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_product.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_role.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_permission.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_role_perm_map.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_user.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_notification.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_asset_hw.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_asset_sw.sql'

psql $host1 $port $user $dbname -f '../queries/create_table_audit.sql'




# Just for Temporary
# $DB_PWD = Read-Host -assecurestring "Specify Postgres password"
# $DB_PWD = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($DB_PWD))

# $env:PGPASSWORD = 'control1234';
# $password = Read-Host -assecurestring "Please enter your password"
# $password = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password))
# $commnad = '"-h " $DB_SERVER "-p " $DB_PORT " -U " $DB_USER' # '-s -f ../queries/create_db.sql'
# $command = 'psql "postgresql://$DB_USER:$DB_PWD@$DB_SERVER"'