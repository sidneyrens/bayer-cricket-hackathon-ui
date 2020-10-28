import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { aboutVisible, userState } from '../recoil/atoms';
import { Typography, Grid, Link, Modal, Card, Divider } from '@material-ui/core';
import './about-modal.css';

interface AboutModalProps {
  ref?: React.RefObject<any>;
}

export default function AboutsModal({ ref }: AboutModalProps): JSX.Element {
  const [showAbout, setShowAbout] = useRecoilState(aboutVisible);

  const onClickDonate = () => window.open('https://uwgsl.tfaforms.net/4602967', '_blank');
  const onClickInfo = () => window.open('https://helpingpeople.org/who-we-are/', '_blank');

  return (
    <Modal ref={ref} open={showAbout} onClose={() => setShowAbout(false)}>
      <Grid
        id="modalContainer"
        container
        className="modalContainer"
        justify="center"
        alignItems="center"
        onClick={() => setShowAbout(false)}
      >
        <Card className="modalBody column spread" onClick={(e) => e.stopPropagation()}>
          <Typography variant="h2">
            United Way and Bayer
            <Divider />
          </Typography>

          <Typography variant="h4" align="center">
            <b>What is United Way?</b> <br />
            United Way was formed in 1887 when a Denver priest, two ministers and a rabbi recognized the need for
            cooperative action to address their city&apos;s welfare problems. The first campaign raised $21,700 for 22
            nonprofits. United Way of Greater St. Louis began in 1922 as the Community Fund, organized by volunteers to
            raise money to help operate 40 charities. Today, through United Way&apos;s local partnership with
            nonprofits, as well as programs and services such as United Way 2-1-1, STLVolunteer, and others, we are able
            to create a stronger, healthier and more equitable region. To learn more about United Way in the Greater St.
            Louis area, <Link onClick={onClickInfo}> Click Here</Link> <br />
            <b> How Does Bayer Fit in with United Way?</b> <br />
            To help raise donations for United Way of Greater St. Louis, Bayer organized a cricket tournament over the
            last four years that helped raised over $100,000. In 2019, Bayer brought together 300 players across 24
            teams and raised $60,000.
            <br />
            <b>How Can I Donate to United Way?</b> <br />
            To help support the Greater St. Louis area, you can donated to United Way
            <Link onClick={onClickDonate}> here.</Link>
          </Typography>
        </Card>
      </Grid>
    </Modal>
  );
}
