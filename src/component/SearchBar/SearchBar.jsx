import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
const NYCNeighborhoods = [
  "Upper East Side",
  "Upper West Side",
  "Midtown Manhattan",
  "Harlem",
  "East Village",
  "West Village",
  "Chelsea",
  "SoHo",
  "Tribeca",
  "Financial District",
  "Williamsburg",
  "DUMBO",
  "Park Slope",
  "Greenpoint",
  "Fort Greene",
  "Red Hook",
  "Crown Heights",
  "Prospect Heights",
  "Bedford-Stuyvesant",
  "Brooklyn Heights",
  "Astoria",
  "Long Island City",
  "Jackson Heights",
  "Flushing",
  "Forest Hills",
  "Sunnyside",
  "Jamaica",
  "Ridgewood",
  "Woodside",
  "Elmhurst",
  "Riverdale",
  "Belmont",
  "Morris Park",
  "Mott Haven",
  "Fordham",
  "Soundview",
  "Pelham Bay",
  "Hunts Point",
  "Throgs Neck",
  "St. George",
  "Stapleton",
];

// ... and so on.
export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={NYCNeighborhoods.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={NYCNeighborhoods.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}
