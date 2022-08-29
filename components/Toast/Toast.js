import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({openToast, setOpenToast, success, message}) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openToast} autoHideDuration={6000} onClose={(handleClose)}>
        <Alert onClose={handleClose} severity={success ? "success": "error"} sx={{ width: '100%' }}>
        {success ? "Success!": message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
