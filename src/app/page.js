"use client";

import Link from "next/link";
import styles from "./page.module.css";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const highlights = [
  {
    title: "Improve operational efficiency",
    description: "Consistent sorting quality while automating documentation.",
    icon: <VisibilityRoundedIcon fontSize="medium" color="primary" />,
  },
  {
    title: "Easy adoption",
    description: "Image-first design enables immediate adoption by workers.",
    icon: <InsightsRoundedIcon fontSize="medium" color="primary" />,
  },
  {
    title: "Easy deployment",
    description: "Adapts to custom sorting standards without lengthy setup.",
    icon: <PrecisionManufacturingRoundedIcon fontSize="medium" color="primary" />,
  },
];

const stats = [
  { label: "Value lost to manual errors", value: "26.6%" },
  { label: "Cash impact vs profit", value: "5x" },
  { label: "SOM revenue target", value: "$552K" },
];

const marketStats = [
  {
    label: "SOM",
    value: "$552K",
    detail: "75 clients revenue in 2028",
  },
  {
    label: "SAM",
    value: "$189M",
    detail: "UK and SEA attainable market",
  },
  {
    label: "TAM",
    value: "$15B",
    detail: "Global fresh produce quality control market",
  },
];

const pricingTiers = [
  { value: "$7,200", detail: "~10,000 scans" },
  { value: "$21,000", detail: "~30,000 scans" },
  { value: "$36,000", detail: "~50,000 scans" },
];

const galleryImages = [
  { src: "/Picture2.png", alt: "Apples on a conveyor line during inspection" },
  { src: "/Picture3.png", alt: "Mobile scan showing fruit defect classification" },
  { src: "/Picture4.png", alt: "Produce quality grading interface with labels" },
];

const demoVideos = [
  {
    src: "/IMG_1691.MP4",
    title: "Mobile inspection demo",
    description: "See the handheld scan workflow used on the sorting line.",
  },
  {
    src: "/qc%20dashboard.mp4",
    title: "QC dashboard walkthrough",
    description: "Explore the web dashboard used to track grading performance.",
  },
];

const mobileImages = [
  { src: "/Picture5.png", alt: "Mobile app showing fruit scan results" },
  { src: "/Picture6.png", alt: "Mobile app dashboard with quality summary" },
];

const dashboardImages = [
  { src: "/Picture7.png", alt: "Web dashboard showing inspection overview" },
  { src: "/Picture8.png", alt: "Web dashboard with grading analytics" },
];

const supporterLogos = [
  { src: "/imperial-logo.png", alt: "Imperial" },
  { src: "/imperial-enterprise-lab.jpg", alt: "Imperial Enterprise Lab" },
  { src: "/nus-logo.png", alt: "NUS" },
  { src: "/grip-logo.png", alt: "National GRIP" },
  { src: "/NTU.png", alt: "NTU" },
];

export default function Home() {
  return (
    <Box className={styles.page} sx={{ bgcolor: "background.default" }}>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              component="img"
              src="/logo.png"
              alt="QCVision logo"
              sx={{ width: 44, height: 44 }}
            />
            <Stack spacing={0.2}>
              <Typography variant="h6" fontWeight={700}>
                QCVision
              </Typography>
              <Typography variant="caption" color="text.secondary">
                AI-powered fruit inspection
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button component={Link} href="#solution" color="inherit">
              Solution
            </Button>
            <Button component={Link} href="#market" color="inherit">
              Market
            </Button>
            <Button
              component={Link}
              href="https://www.linkedin.com/company/qcvision/"
              color="primary"
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, rgba(11,58,143,0.1), rgba(11,58,143,0.02))",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Chip
                  label="Extra eyes on every fruit, all checks digitized."
                  color="secondary"
                  sx={{
                    width: "fit-content",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                  }}
                />
                <Typography variant="h3" component="h1" fontWeight={700}>
                  Digitize fruit inspection with QCVISION.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Fruit inspection at scale is exhausting and repetitive, making it difficult to
                  enforce consistent sorting standards.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Small and mid-scale stakeholders in the fruit value chain are priced out by
                  costly automated solutions.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Manual sorting errors consume 26.6% of production value for mid-scale fruit
                  operations—burning cash equivalent to 5x their annual profit.
                </Typography>
                <Typography variant="subtitle1" fontWeight={700}>
                  QCVISION: A cross-platform, AI-powered fruit-scanning app and web dashboard for
                  faster, more objective produce grading.
                </Typography>
                <Stack spacing={2}>
                  {highlights.map((item) => (
                    <Stack key={item.title} direction="row" spacing={2} alignItems="center">
                      <Box sx={{ color: "primary.main" }}>{item.icon}</Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    component={Link}
                    href="https://www.linkedin.com/company/qcvision/"
                    variant="contained"
                    size="large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore QCVision
                  </Button>
                  <Button component={Link} href="#contact" variant="outlined" size="large">
                    Talk with QCVision
                  </Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
                  {stats.map((stat) => (
                    <Box key={stat.label}>
                      <Typography variant="h4" fontWeight={700}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Typography variant="caption" color="text.secondary">
                  Metrics reflect mid-scale fruit operations and internal estimates.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: { xs: 2, md: 3 }, borderRadius: 4 }}>
                <Box
                  component="img"
                  src="/Picture1.png"
                  alt="Handheld scanner inspecting oranges on a packing line"
                  sx={{ width: "100%", borderRadius: 3 }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" component="section" sx={{ py: { xs: 6, md: 8 } }}>
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Typography variant="overline" color="primary">
                Product visuals
              </Typography>
            <Typography variant="h4" fontWeight={700}>
              Extra eyes across every grading station.
            </Typography>
              <Typography color="text.secondary" maxWidth={680}>
                The hero image highlights the handheld inspection experience. The visuals below show the
                mobile app and the web dashboard that power consistent grading decisions.
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="overline" color="primary">
                Demo videos
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                Watch QCVision in action.
              </Typography>
              <Typography color="text.secondary" maxWidth={680}>
                See the mobile scanning workflow and the web dashboard analytics in motion.
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {demoVideos.map((video) => (
                <Grid item xs={12} md={6} key={video.src}>
                  <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
                    <Box
                      component="video"
                      src={video.src}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={video.title}
                      title={video.title}
                      sx={{
                        width: "100%",
                        height: 260,
                        objectFit: "cover",
                        display: "block",
                        bgcolor: "grey.100",
                      }}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {video.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {video.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3}>
              {galleryImages.map((image) => (
                <Grid item xs={12} sm={6} md={4} key={image.src}>
                  <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: "100%", height: 240, objectFit: "cover" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="overline" color="primary">
                  Mobile app
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  Fast scans at the point of inspection.
                </Typography>
                <Typography color="text.secondary">
                  These mobile app views capture the experience used by sorting teams.
                </Typography>
              </Stack>
            </Grid>
            {mobileImages.map((image) => (
              <Grid item xs={12} md={4} key={image.src}>
                <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: "100%", height: 260, objectFit: "cover" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="overline" color="primary">
                  Web dashboard
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  Real-time oversight for operations leaders.
                </Typography>
                <Typography color="text.secondary">
                  These dashboard screens spotlight analytics for grading insights.
                </Typography>
              </Stack>
            </Grid>
            {dashboardImages.map((image) => (
              <Grid item xs={12} md={4} key={image.src}>
                <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: "100%", height: 260, objectFit: "cover" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Container
        maxWidth="lg"
        component="section"
        id="solution"
        sx={{ py: { xs: 6, md: 8 } }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2} maxWidth={520}>
              <Typography variant="overline" color="primary">
                Solution
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                Consistent grading without the manual burden.
              </Typography>
              <Typography color="text.secondary">
                QCVision combines mobile scanning with a cross-platform dashboard so teams can
                track quality, automate documentation, and deploy new standards quickly.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {highlights.map((item) => (
                <Card key={item.title} sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Stack spacing={1.5} direction="row" alignItems="center">
                      <Box sx={{ color: "primary.main" }}>{item.icon}</Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">{item.description}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box component="section" id="market" sx={{ bgcolor: "grey.50", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography variant="overline" color="primary">
              Market & growth
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              Built for the global fresh produce market.
            </Typography>
          </Stack>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {marketStats.map((stat) => (
              <Grid item xs={12} md={4} key={stat.label}>
                <Card sx={{ borderRadius: 3, height: "100%" }}>
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography variant="overline" color="primary">
                        {stat.label}
                      </Typography>
                      <Typography variant="h4" fontWeight={700}>
                        {stat.value}
                      </Typography>
                      <Typography color="text.secondary">{stat.detail}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} sx={{ mt: 5 }}>
            <Typography variant="overline" color="primary">
              Annual subscription fees
            </Typography>
            <Grid container spacing={3}>
              {pricingTiers.map((tier) => (
                <Grid item xs={12} md={4} key={tier.value}>
                  <Card sx={{ borderRadius: 3, height: "100%" }}>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight={700}>
                          {tier.value}
                        </Typography>
                        <Typography color="text.secondary">{tier.detail}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="overline" color="primary">
            Supported by
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
            {supporterLogos.map((logo) => (
              <Box
                key={logo.alt}
                component="img"
                src={logo.src}
                alt={logo.alt}
                sx={{ height: 48, objectFit: "contain" }}
              />
            ))}
          </Stack>
        </Stack>
      </Container>

      <Box component="section" id="contact" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Card sx={{ p: { xs: 3, md: 5 }, textAlign: "center", borderRadius: 3 }}>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" fontWeight={700}>
                Ready to digitize fruit inspection?
              </Typography>
              <Typography color="text.secondary">
                Let&apos;s talk about how QCVision can elevate quality for your fruit operations.
                Connect with us on LinkedIn to get started.
              </Typography>
              <Button
                component={Link}
                href="https://www.linkedin.com/company/qcvision/"
                variant="contained"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>

      <Box component="footer" sx={{ bgcolor: "grey.900", color: "grey.100", py: 4 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Stack spacing={1}>
              <Typography variant="h6" fontWeight={700}>
                QCVision
              </Typography>
              <Typography variant="body2" color="grey.400">
                AI-powered fruit scanning for objective produce grading.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button component={Link} href="#solution" color="inherit" size="small">
                Solution
              </Button>
              <Button component={Link} href="#market" color="inherit" size="small">
                Market
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
