import React from 'react';
import { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import { contact } from '../../constants/portfolio'
import '../../Styles/Contact.css'
import line from '../../../public/line_g9h.jpg'
export default function Contact() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!contact.email) return null
  return (
    <section className='section contact center' id='contact'>

      <h2 className='section__title'>Contact</h2>
      {/* <a href={`mailto:${contact.email}`}>
        <span className='btn btn--outline'>
          Email me
        </span>
      </a> */}

      <TabContext value={value}>
        <Box sx={{ borderBottom: 0, borderColor: '' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<EmailIcon />} label="EMAIL" value="1" className='link link--icon' />
            <Tab icon={<PlaceIcon />} label="ADDRESS" value="2" className='link link--icon' />
            <Tab icon={<PhoneIphoneIcon />} label="OTHER" value="3" className='link link--icon' />
          </TabList>
        </Box>
        <TabPanel value="1"><span className="about__contact"> triphop.pro@gmail.com </span></TabPanel>
        <TabPanel value="2"><span className="about__contact">ปัจจุบันพักอาศัยอยู่ใกล้ MRT บางพลัด </span></TabPanel>
        <TabPanel value="3"><img className='about__contact_image' src={process.env.PUBLIC_URL + '/line_g9h.jpg'} alt="My Image" /></TabPanel>
      </TabContext>
    </section>
  );
}