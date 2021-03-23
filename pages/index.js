import Head from 'next/head';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from '../styles/Home.module.css';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Trans i18nKey="welcome">
            <a href="https://nextjs.org">Next.js!</a>
          </Trans>
        </h1>

        <p className={styles.description}>
          <Trans i18nKey="get-started">
            <code className={styles.code}>pages/index.js</code>
          </Trans>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>{t('grid.document')} &rarr;</h3>
            <p>{t('grid.document-desc')}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>{t('grid.learn')} &rarr;</h3>
            <p>{t('grid.learn-desc')}</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>{t('grid.example')} &rarr;</h3>
            <p>{t('grid.example-desc')}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>{t('grid.deploy')} &rarr;</h3>
            <p>{t('grid.deploy-desc')}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
