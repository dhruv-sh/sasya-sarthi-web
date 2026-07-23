$filePath = "C:\Users\harsh\.gemini\antigravity-ide\brain\ba0c578d-db77-4bdb-a274-12a607c73835\.system_generated\steps\155\content.md"
$raw = [System.IO.File]::ReadAllText($filePath)

$search = "export const"
$idx = $raw.IndexOf($search)
Write-Host "Index: $idx"

if ($idx -ge 0) {
    $snippet = $raw.Substring($idx, [Math]::Min(20000, $raw.Length - $idx))
    [System.IO.File]::WriteAllText("C:\Users\harsh\.gemini\antigravity-ide\scratch\sasya-sarthi-web\extracted_mock2.js", $snippet)
    Write-Host "Saved to extracted_mock2.js"
}
