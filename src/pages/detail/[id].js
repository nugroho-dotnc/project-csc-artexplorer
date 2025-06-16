import { useRouter } from 'next/router';
const DetailMuseum = () => {
     const router = useRouter();
     const { id } = router.query;
    return <>
        <div className="mt-32">
            detail museum { id }
        </div>
    </>
}
export default DetailMuseum;