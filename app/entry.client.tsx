import { RemixBrowser } from '@remix-run/react';
import { hydrateRoot } from 'react-dom/client';
import 'bootstrap';

hydrateRoot(document, <RemixBrowser />);
