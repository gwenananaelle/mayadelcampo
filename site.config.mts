import type { AstroInstance } from 'astro';
import { Linkedin, Mail } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Maya del Campo',
	favicon: 'logo.png',
	owner: 'Marie Deschamps',
	profileImage: 'profile.jpg',
	socialLinks: [
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/marie-julie-deschamps-b117a43a',
			icon: Linkedin,
		} as SocialLink,
		{
			name: 'mail',
			url: 'mailto:marie.deschamps@yahoo.com',
			icon: Mail,
		} as SocialLink,
	],
};
