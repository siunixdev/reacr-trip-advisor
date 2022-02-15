import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './styles'

const Header = () => {
  return (
    <AppBar position="static" className="">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TRIP ADVISOR
        </Typography>
        <Box display='flex'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Explore New Place"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header