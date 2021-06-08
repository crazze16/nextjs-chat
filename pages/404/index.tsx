import Link from "next/link";
import {MainLayout} from "components/mainLayout/mainLayout";
import s from './styles.module.scss'

const ErrorPage = () => {
    return (
        <MainLayout title='404'>
            <p className={s.error}>ERROR 404 :(</p>
            <Link href={'/'}><a>go to the home page</a></Link>
        </MainLayout>
    )
};

export default ErrorPage;