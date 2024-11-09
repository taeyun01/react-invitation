import { Wedding } from '../models/wedding';
declare const useWedding: () => {
    wedding: Wedding;
    isLoading: false;
    error: Error | null;
};
export default useWedding;
