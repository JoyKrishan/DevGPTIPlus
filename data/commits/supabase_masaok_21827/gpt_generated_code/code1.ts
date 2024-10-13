import { createClient } from '@supabase/supabase-js'

// Initialize the Supabase client
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchAttendanceWithScans() {
  const { data, error } = await supabase
    .from('attendance')
    .select(`
      *,
      scans:scan_id_start (
        id,
        created_at,
        updated_at,
        timestamp,
        type,
        data,
        greeting_name,
        email
      )
    `)
    .eq('scans.id', 'attendance.scan_id_start'); // This line is technically not needed for the join but is shown for clarity. The join is already specified in the select method.

  if (error) {
    console.error(error);
    return;
  }

  return data;
}

// Call the function to fetch data
fetchAttendanceWithScans().then(data => {
  console.log(data);
});