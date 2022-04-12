import {useRouter} from 'next/router'

export default function ListCity() {
  const router = useRouter();
  const city = router.query.city;
  return <h1>city, {city}</h1>
}