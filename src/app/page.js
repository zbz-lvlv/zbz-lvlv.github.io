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
    title: "AI Quality Inspection",
    description:
      "Deploy computer vision models that detect defects in milliseconds and scale across production lines.",
    icon: <VisibilityRoundedIcon fontSize="medium" color="primary" />,
  },
  {
    title: "Operational Insights",
    description:
      "Surface real-time analytics that help teams prevent scrap, reduce downtime, and improve yield.",
    icon: <InsightsRoundedIcon fontSize="medium" color="primary" />,
  },
  {
    title: "Factory Automation",
    description:
      "Integrate with existing equipment to automate quality workflows and ensure consistent results.",
    icon: <PrecisionManufacturingRoundedIcon fontSize="medium" color="primary" />,
  },
];

const stats = [
  { label: "Inspection speed", value: "<1s" },
  { label: "Defect coverage", value: "99%" },
  { label: "Factories onboarded", value: "250+" },
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
                Intelligent quality control
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
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
                  label="Computer vision for manufacturing"
                  color="secondary"
                  sx={{ width: "fit-content", fontWeight: 600 }}
                />
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
                    Explore QCVision
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
              <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
                <Stack spacing={3}>
                  <Typography variant="overline" color="primary">
                    Trusted by manufacturing teams
                  </Typography>
                  <Typography variant="h5" fontWeight={700}>
                    Automate inspections with vision models that adapt to every line.
                  </Typography>
                  <Typography color="text.secondary">
                    QCVision blends AI models, integrated dashboards, and operator workflows to
                    keep quality high and production moving.
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
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" component="section" id="solutions" sx={{ py: { xs: 7, md: 9 } }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2} maxWidth={520}>
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

      <Box component="section" id="insights" sx={{ bgcolor: "grey.50", py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
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
                  <Stack spacing={1}>
                    <Typography variant="subtitle1" fontWeight={700}>
                      Accuracy you can trust
                    </Typography>
                    <Typography color="text.secondary">
                      QCVision pairs deep learning with proven manufacturing expertise to deliver
                      dependable defect detection.
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="subtitle1" fontWeight={700}>
                      Actionable visibility
                    </Typography>
                    <Typography color="text.secondary">
                      From dashboards to alerts, every insight helps quality teams make confident
                      decisions faster.
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography variant="subtitle1" fontWeight={700}>
                        Collaborative partnership
                      </Typography>
                      <Typography color="text.secondary">
                        Our customer success team works shoulder-to-shoulder with factory leaders to
                        drive lasting change.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography variant="subtitle1" fontWeight={700}>
                        Real-time quality clarity
                      </Typography>
                      <Typography color="text.secondary">
                        Monitor yield, detect drift early, and align every station on quality
                        targets.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography variant="subtitle1" fontWeight={700}>
                        Operator-first workflows
                      </Typography>
                      <Typography color="text.secondary">
                        Give front-line teams the guidance they need with intuitive dashboards and
                        alerts.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
                <Button
                  component={Link}
                  href="https://www.linkedin.com/company/qcvision/"
                  variant="text"
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ alignSelf: "flex-start" }}
                >
                  Follow our latest updates
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="md">
          <Card sx={{ p: { xs: 3, md: 5 }, textAlign: "center", borderRadius: 3 }}>
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
