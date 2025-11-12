import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zlayevitzarkuwtajcxw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsYXlldml0emFya3V3dGFqY3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MDc2NTEsImV4cCI6MjA3ODQ4MzY1MX0.MrO1ZnTPurH67XML1dbdqbfD_Nl9ow3imarv5BAy57o'

export const supabase = createClient(supabaseUrl, supabaseKey)