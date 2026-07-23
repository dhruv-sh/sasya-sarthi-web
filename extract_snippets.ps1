$filePath = "C:\Users\harsh\.gemini\antigravity-ide\brain\ba0c578d-db77-4bdb-a274-12a607c73835\.system_generated\steps\155\content.md"
$raw = [System.IO.File]::ReadAllText($filePath)

$searchTerms = @("Hectares", "Reinsurance", "Underwriting", "Actuarial", "SmartVillage", "Insights", "Capabilities", "PMFBY", "Ground-truthing", "Yield")

$sb = [System.Text.StringBuilder]::new()

foreach ($term in $searchTerms) {
    $idx = 0
    [void]$sb.AppendLine("=== SEARCH TERM: $term ===")
    while ($true) {
        $idx = $raw.IndexOf($term, $idx)
        if ($idx -lt 0) { break }
        $start = [Math]::Max(0, $idx - 150)
        $len = [Math]::Min(300, $raw.Length - $start)
        [void]$sb.AppendLine($raw.Substring($start, $len))
        [void]$sb.AppendLine("-----------------------------------")
        $idx += $term.Length + 50
    }
}

[System.IO.File]::WriteAllText("C:\Users\harsh\.gemini\antigravity-ide\scratch\sasya-sarthi-web\extracted_snippets.txt", $sb.ToString())
Write-Host "Snippets extracted!"
