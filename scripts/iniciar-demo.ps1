# Ejecutar únicamente sobre una base local de desarrollo. No guarda contraseñas en archivos.
$ErrorActionPreference = "Stop"
$variablesDemo = @("HUELLITAS_ADMIN_PASSWORD", "HUELLITAS_RECEPCION_PASSWORD", "HUELLITAS_VETERINARIO_PASSWORD")
$definioDb = -not [bool]$env:DB_PASSWORD
$valoresAnteriores = @{}
foreach ($nombre in $variablesDemo) { $valoresAnteriores[$nombre] = [Environment]::GetEnvironmentVariable($nombre, "Process") }
function Leer-ClaveLocal([string]$mensaje) {
    $segura = Read-Host $mensaje -AsSecureString
    $puntero = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($segura)
    try { return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($puntero) }
    finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($puntero) }
}
Push-Location (Join-Path $PSScriptRoot "..")
try {
    if ($definioDb) { $env:DB_PASSWORD = Leer-ClaveLocal "Contraseña de MySQL local" }
    foreach ($nombre in $variablesDemo) {
        $claveLocal = Leer-ClaveLocal "$nombre (mínimo 12 caracteres; máximo 72 bytes)"
        [Environment]::SetEnvironmentVariable($nombre, $claveLocal, "Process")
        $claveLocal = $null
    }
    & .\mvnw.cmd "spring-boot:run" "-Dspring-boot.run.profiles=demo"
    if ($LASTEXITCODE -ne 0) { throw "La aplicación no pudo iniciar. Revisa el mensaje de error." }
} finally {
    foreach ($nombre in $variablesDemo) { [Environment]::SetEnvironmentVariable($nombre, $valoresAnteriores[$nombre], "Process") }
    if ($definioDb) { Remove-Item Env:DB_PASSWORD -ErrorAction SilentlyContinue }
    Pop-Location
}
