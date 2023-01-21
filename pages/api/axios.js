import axios from 'axios';

export default function MyPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.pix.com/v2/images', {
                params: {
                    api_key: '91984007852',
                },
            })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}