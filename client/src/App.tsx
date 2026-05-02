import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DealerPage from "./pages/DealerPage";
import CustomerPage from "./pages/CustomerPage";

// Detect base path from Vite's import.meta.env.BASE_URL (set during build)
const basePath = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

function AppRouter() {
  return (
    <Switch>
      <Route path="/dealer" component={DealerPage} />
      <Route path="/customer" component={CustomerPage} />
      <Route path="/">
        <Redirect to="/dealer" />
      </Route>
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base={basePath}>
            <AppRouter />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
