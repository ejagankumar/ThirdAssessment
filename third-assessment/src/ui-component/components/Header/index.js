import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../index.css";

const Header = ({ label }) => {
  return (
    <div>
      <Typography component="div">
        <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h6.fontSize" letterSpacing={6} m={1}>
          {label}
        </Box>
      </Typography>
    </div>
  );
};

export default Header;
{/* <Box fontWeight="fontWeightLight" m={1}>
Light
</Box>
<Box fontWeight="fontWeightRegular" m={1}>
Regular
</Box>
<Box fontWeight="fontWeightMedium" m={1}>
Medium
</Box>
<Box fontWeight={500} m={1}>
500
</Box>
<Box fontWeight="fontWeightBold"  m={1}>
Bold
</Box>
</Typography>
<Typography component="div">
<Box fontSize="fontSize" m={1}>
Default
</Box>
<Box fontSize="h6.fontSize" m={1}>
h6.fontSize
</Box>
<Box fontSize={16} m={1}>
16px
</Box>
</Typography>
<Typography component="div">
<Box fontStyle="normal" m={1}>
Normal font style.
</Box>
<Box fontStyle="italic" m={1}>
Italic font Style.
</Box>
<Box fontStyle="oblique" m={1}>
Oblique font style.
</Box>
</Typography>
<Typography component="div">
<Box letterSpacing={6} m={1}>
Letter Spacing 6px.
</Box>
<Box letterSpacing={10} m={1}>
Letter Spacing 10px.
</Box>
</Typography>
<Typography component="div">
<Box lineHeight="normal" m={1}>
Normal height.
</Box>
<Box lineHeight={10} m={1}>
10 px.
</Box>
</Typography>
<Typography component="div">
<Box textAlign="justify" m={1}>
Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
Donec sed odio operae, eu vulputate felis rhoncus.
</Box>
<Box textAlign="left" m={1}>
Left aligned text.
</Box>
<Box textAlign="center" m={1}>
Center aligned text.
</Box>
<Box textAlign="right" m={1}>
Right aligned text.
</Box> */}