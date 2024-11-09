import { Wedding } from '../../models/wedding';
interface ContactProps {
    groom: Wedding['groom'];
    bride: Wedding['bride'];
}
declare const Contact: ({ groom, bride }: ContactProps) => import("react/jsx-runtime").JSX.Element;
export default Contact;
