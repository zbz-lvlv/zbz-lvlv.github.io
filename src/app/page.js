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
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

const highlights = [
  {
    title: "Improve operational efficiency",
    description: "Consistent sorting quality while automating documentation.",
    icon: <InsightsRoundedIcon fontSize="medium" />,
  },
  {
    title: "Easy adoption",
    description: "Image-first design enables immediate adoption by workers.",
    icon: <CameraAltRoundedIcon fontSize="medium" />,
  },
  {
    title: "Easy deployment",
    description: "Adapts to custom sorting standards without lengthy setup.",
    icon: <TuneRoundedIcon fontSize="medium" />,
  },
];

const stats = [
  { label: "Value lost to manual errors", value: "26.6%" },
  { label: "Cash impact vs profit", value: "5×" },
  { label: "SOM revenue target", value: "$552K" },
];

const marketStats = [
  {
    label: "TAM",
    value: "$15B",
    detail: "Global fresh produce quality control market",
  },
  {
    label: "SAM",
    value: "$189M",
    detail: "UK and SEA attainable market",
  },
  {
    label: "SOM",
    value: "$552K",
    detail: "75 clients revenue in 2028",
  },
];

const pricingTiers = [
  { label: "Starter", value: "$7,200", period: "/year", detail: "~10,000 scans" },
  { label: "Growth", value: "$21,000", period: "/year", detail: "~30,000 scans" },
  { label: "Scale", value: "$36,000", period: "/year", detail: "~50,000 scans" },
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
      {/* Navigation */}
      <AppBar position="sticky" elevation={0} color="transparent">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1.5 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                component="img"
                src="/logo.png"
                alt="QCVision logo"
                sx={{ width: 40, height: 40 }}
              />
              <Typography variant="h6" fontWeight={700} color="primary.main">
                QCVision
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Button component={Link} href="#solution" color="inherit" size="small">
                Solution
              </Button>
              <Button component={Link} href="#market" color="inherit" size="small">
                Market
              </Button>
              <Button
                component={Link}
                href="https://www.linkedin.com/company/qcvision/"
                color="primary"
                variant="contained"
                size="small"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero section */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(160deg, #032892 0%, #021d6e 50%, #01124a 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-30%",
            right: "-10%",
            width: "50%",
            height: "160%",
            background:
              "radial-gradient(circle, rgba(120,244,6,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Chip
                  label="AI-powered perishables quality control"
                  sx={{
                    width: "fit-content",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                    fontSize: "0.7rem",
                    bgcolor: "rgba(120,244,6,0.15)",
                    color: "#78f406",
                    border: "1px solid rgba(120,244,6,0.3)",
                  }}
                />
                <Typography
                  variant="h3"
                  component="h1"
                  fontWeight={700}
                  sx={{ lineHeight: 1.15 }}
                >
                  Digitize perishables inspection with QCVision.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 480 }}
                >
                  Fruit inspection at scale is exhausting and repetitive, making it
                  difficult to enforce consistent sorting standards. Manual sorting errors
                  consume 26.6% of production value for mid-scale operations.
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: "rgba(255,255,255,0.9)" }}
                >
                  A cross-platform, AI-powered scanning app and web dashboard for
                  faster, more objective produce grading.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
                  <Button
                    component={Link}
                    href="https://www.linkedin.com/company/qcvision/"
                    variant="contained"
                    size="large"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "#78f406",
                      color: "#021d6e",
                      fontWeight: 700,
                      "&:hover": {
                        bgcolor: "#93f63e",
                        boxShadow: "0 4px 20px rgba(120,244,6,0.4)",
                      },
                    }}
                  >
                    Explore QCVision
                  </Button>
                  <Button
                    component={Link}
                    href="#contact"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "rgba(255,255,255,0.4)",
                      color: "#fff",
                      "&:hover": {
                        borderColor: "#fff",
                        bgcolor: "rgba(255,255,255,0.08)",
                      },
                    }}
                  >
                    Get in Touch
                  </Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={4} sx={{ pt: 2 }}>
                  {stats.map((stat) => (
                    <Box key={stat.label}>
                      <Typography variant="h4" fontWeight={700}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Box
                  component="img"
                  src="/Picture1.png"
                  alt="Handheld scanner inspecting oranges on a packing line"
                  sx={{ width: "100%", display: "block" }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Value proposition highlights */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {highlights.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "box-shadow 0.2s, transform 0.2s",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(3,40,146,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "rgba(3,40,146,0.08)",
                          color: "primary.main",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography variant="h6" fontWeight={700}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Product visuals */}
      <Container maxWidth="lg" component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={6}>
          <Stack spacing={1} sx={{ textAlign: "center", maxWidth: 640, mx: "auto" }}>
            <Typography
              variant="overline"
              sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}
            >
              Product visuals
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              See QCVision in action
            </Typography>
            <Typography color="text.secondary">
              From handheld scanning to real-time analytics, explore every layer of the
              inspection workflow.
            </Typography>
          </Stack>

          {/* Demo videos */}
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
                      height: 280,
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

          {/* Gallery images */}
          <Grid container spacing={3}>
            {galleryImages.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.src}>
                <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Mobile app showcase */}
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <Typography
                  variant="overline"
                  sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}
                >
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
                    sx={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Dashboard showcase */}
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <Typography
                  variant="overline"
                  sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}
                >
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
                    sx={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>

      {/* Solution section */}
      <Box
        component="section"
        id="solution"
        sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Stack spacing={2}>
                <Typography
                  variant="overline"
                  sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}
                >
                  Solution
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  Consistent grading without the manual burden.
                </Typography>
                <Typography color="text.secondary">
                  QCVision combines mobile scanning with a cross-platform dashboard so
                  teams can track quality, automate documentation, and deploy new
                  standards quickly.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                {highlights.map((item) => (
                  <Card key={item.title} sx={{ borderRadius: 3 }}>
                    <CardContent sx={{ p: 2.5 }}>
                      <Stack spacing={1.5} direction="row" alignItems="center">
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "rgba(3,40,146,0.08)",
                            color: "primary.main",
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={700}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Market & growth section */}
      <Box
        component="section"
        id="market"
        sx={{
          py: { xs: 6, md: 8 },
          background:
            "linear-gradient(160deg, #032892 0%, #021d6e 60%, #01124a 100%)",
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography
              variant="overline"
              sx={{ color: "#78f406", fontWeight: 700, letterSpacing: 1.5 }}
            >
              Market & growth
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              Built for the global fresh produce market.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {marketStats.map((stat) => (
              <Grid item xs={12} md={4} key={stat.label}>
                <Card
                  sx={{
                    borderRadius: 3,
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "none",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={1}>
                      <Typography
                        variant="overline"
                        sx={{ color: "#78f406", fontWeight: 700, letterSpacing: 1.5 }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography variant="h3" fontWeight={700} sx={{ color: "#fff" }}>
                        {stat.value}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                        {stat.detail}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 5 }} />
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: "#78f406", fontWeight: 700, letterSpacing: 1.5 }}
            >
              Annual subscription plans
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {pricingTiers.map((tier) => (
              <Grid item xs={12} md={4} key={tier.value}>
                <Card
                  sx={{
                    borderRadius: 3,
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "none",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={1}>
                      <Typography
                        variant="overline"
                        sx={{ color: "rgba(255,255,255,0.6)", letterSpacing: 1.5 }}
                      >
                        {tier.label}
                      </Typography>
                      <Stack direction="row" alignItems="baseline" spacing={0.5}>
                        <Typography variant="h4" fontWeight={700} sx={{ color: "#fff" }}>
                          {tier.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
                          {tier.period}
                        </Typography>
                      </Stack>
                      <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                        {tier.detail}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Supporters */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: 1.5 }}
            >
              Supported by
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              {supporterLogos.map((logo) => (
                <Box
                  key={logo.alt}
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    height: 44,
                    objectFit: "contain",
                    opacity: 0.7,
                    transition: "opacity 0.2s",
                    "&:hover": { opacity: 1 },
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box component="section" id="contact" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="sm">
          <Card
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              borderRadius: 4,
              background:
                "linear-gradient(160deg, #032892 0%, #021d6e 100%)",
              color: "#fff",
              boxShadow: "0 20px 60px rgba(3,40,146,0.2)",
              border: "none",
            }}
          >
            <Stack spacing={2.5} alignItems="center">
              <Typography variant="h4" fontWeight={700}>
                Ready to digitize perishables inspection?
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 400 }}>
                Connect with us on LinkedIn to learn how QCVision can elevate
                quality for your operations.
              </Typography>
              <Button
                component={Link}
                href="https://www.linkedin.com/company/qcvision/"
                variant="contained"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#78f406",
                  color: "#021d6e",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#93f63e",
                    boxShadow: "0 4px 20px rgba(120,244,6,0.4)",
                  },
                }}
              >
                Connect on LinkedIn
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#0a0f1f",
          color: "grey.300",
          py: 4,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                component="img"
                src="/logo.png"
                alt="QCVision logo"
                sx={{ width: 32, height: 32, opacity: 0.9 }}
              />
              <Stack spacing={0}>
                <Typography variant="subtitle2" fontWeight={700} color="grey.100">
                  QCVision
                </Typography>
                <Typography variant="caption" color="grey.500">
                  AI-powered perishables quality control.
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1}>
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
