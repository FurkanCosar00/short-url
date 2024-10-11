const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJueHFyY3dpYXNxZ2JzZ2pqd3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NDk0NzksImV4cCI6MjA0NDIyNTQ3OX0.EoCwv9Nhj7z3_Ekyddoc2eGiFP53I-Y7bL6J-Hv9iQQ"


export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}