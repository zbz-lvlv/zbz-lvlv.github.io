"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const heroImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";

const highlights = [
  {
    title: "AI Quality Inspection",
    description:
      "Deploy computer vision models that detect defects in milliseconds and scale across production lines.",
    icon: <VisibilityRoundedIcon fontSize="large" color="primary" />,
  },
  {
    title: "Operational Insights",
    description:
      "Surface real-time analytics that help teams prevent scrap, reduce downtime, and improve yield.",
    icon: <InsightsRoundedIcon fontSize="large" color="primary" />,
  },
  {
    title: "Factory Automation",
    description:
      "Integrate with existing equipment to automate quality workflows and ensure consistent results.",
    icon: <PrecisionManufacturingRoundedIcon fontSize="large" color="primary" />,
  },
];

const stats = [
  { label: "Inspection speed", value: "<1s" },
  { label: "Defect coverage", value: "99%" },
  { label: "Factories onboarded", value: "250+" },
];

const values = [
  {
    title: "Accuracy you can trust",
    description:
      "QCVision pairs deep learning with proven manufacturing expertise to deliver dependable defect detection.",
  },
  {
    title: "Actionable visibility",
    description:
      "From dashboards to alerts, every insight helps quality teams make confident decisions faster.",
  },
  {
    title: "Collaborative partnership",
    description:
      "Our customer success team works shoulder-to-shoulder with factory leaders to drive lasting change.",
  },
];

export default function Home() {
  return (
    <Box className={styles.page} sx={{ bgcolor: "background.default" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <VerifiedRoundedIcon color="primary" />
            <Typography variant="h6" fontWeight={700}>
              QCVision
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button component={Link} href="#solutions" color="inherit">
              Solutions
            </Button>
            <Button component={Link} href="#insights" color="inherit">
              Insights
            </Button>
            <Button
              component={Link}
              href="https://www.linkedin.com/company/qcvision/"
              color="primary"
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, rgba(25,118,210,0.08), rgba(25,118,210,0.02))",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="overline" color="primary">
                  Computer vision for manufacturing
                </Typography>
                <Typography variant="h3" component="h1" fontWeight={700}>
                  Raise quality standards with intelligent inspection.
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  QCVision empowers manufacturers with AI-driven quality control, connecting
                  camera systems, analytics, and operators in one unified platform.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    component={Link}
                    href="https://www.linkedin.com/company/qcvision/"
                    variant="contained"
                    size="large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore on LinkedIn
                  </Button>
                  <Button
                    component={Link}
                    href="#contact"
                    variant="outlined"
                    size="large"
                  >
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
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: 6,
                }}
              >
                <Image
                  src={heroImage}
                  alt="Engineers reviewing quality data"
                  width={1200}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" component="section" id="solutions" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={2} maxWidth={640}>
          <Typography variant="overline" color="primary">
            Solutions
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            End-to-end quality intelligence
          </Typography>
          <Typography color="text.secondary">
            From inspection to insight, QCVision delivers the tools manufacturers need to
            elevate quality at every step of production.
          </Typography>
        </Stack>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {highlights.map((item) => (
            <Grid key={item.title} item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack spacing={2}>
                    {item.icon}
                    <Typography variant="h6" fontWeight={700}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box component="section" id="insights" sx={{ bgcolor: "grey.50", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="overline" color="primary">
                  Insights
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  Confidence for every line, every shift.
                </Typography>
                <Typography color="text.secondary">
                  QCVision analytics empower quality leaders with transparent, accessible data.
                  Track yield, understand defect patterns, and align teams around measurable
                  outcomes.
                </Typography>
                <Button
                  component={Link}
                  href="https://www.linkedin.com/company/qcvision/"
                  variant="text"
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow our latest updates
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                {values.map((value) => (
                  <Card key={value.title} sx={{ bgcolor: "background.paper" }}>
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                        {value.title}
                      </Typography>
                      <Typography color="text.secondary">{value.description}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Card sx={{ p: { xs: 3, md: 5 }, textAlign: "center" }}>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" fontWeight={700}>
                Ready to modernize inspection?
              </Typography>
              <Typography color="text.secondary">
                Let&apos;s talk about how QCVision can elevate quality for your manufacturing
                teams. Connect with us on LinkedIn to get started.
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
                AI-powered quality control for modern manufacturing.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                component={Link}
                href="#solutions"
                color="inherit"
                size="small"
              >
                Solutions
              </Button>
              <Button component={Link} href="#contact" color="inherit" size="small">
                Contact
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
