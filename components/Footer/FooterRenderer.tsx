import Image from 'next/image';
import Link from 'next/link';
import SvgRenderer from '../Common/SvgRenderer';
import {
  ChangeLogRecord,
  FooterQuery,
  LegalPageRecord,
  SiteLocale,
} from '@/graphql/types/graphql';
import { notFound } from 'next/navigation';
import { primaryColor } from '@/app/i18n/settings';
import ReactMarkdown from 'react-markdown';

type Props = {
  data: FooterQuery;
  lng: SiteLocale;
};

const Footer = ({ data, lng }: Props) => {
  return (
    <footer className="relative z-10 mx-auto">
      <div className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-teal via-blue-light to-blue-dark pt-16 text-center md:text-start lg:pt-24">
        <div className="container w-full">
          <div className="flex w-full flex-col justify-between md:flex-row md:px-16">
            <div className="w-full">
              <div className="mx- mb-12 lg:mb-16">
                <Link href={'/' + lng + '/home'} className="mb-8 inline-block">
                  {data.layout?.footerLogo && (
                    <Image
                      src={data.layout.footerLogo.url}
                      alt="logo"
                      className="w-full"
                      width={data.layout.footerLogo.width || 100}
                      height={data.layout.footerLogo.height || 100}
                    />
                  )}
                </Link>
                <div className="mb-9 text-xl font-extrabold uppercase leading-tight text-white">
                  <ReactMarkdown>
                    {data.layout!.footerSubtitle || ''}
                  </ReactMarkdown>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  {data.layout!.socialMediaLinks.map((socialMedia) => {
                    return (
                      <a
                        href={socialMedia.url}
                        aria-label="social-link"
                        className="mr-6 text-light hover:text-white"
                        key={socialMedia.id}
                      >
                        <SvgRenderer url={socialMedia.icon.url} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex w-full md:text-end">
              <div className="w-full">
                <div className="mb-12 lg:mb-16">
                  <ul>
                    {data.layout!.footerLinks.map((link) => {
                      const pageLink = link as LegalPageRecord; // The field has a "at least one" validation
                      return (
                        <li key={pageLink.id}>
                          <a
                            href={'/' + lng + '/legal/' + pageLink.slug}
                            className="mb-4 inline-block text-base font-medium text-light hover:text-white hover:underline"
                          >
                            {' '}
                            {pageLink.title}{' '}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full">
        <div className="flex bg-white  py-8 text-center md:text-start px-16 justify-between">
          <div>Privacy Policy</div>
          <div>www.korsit.co ©2012-{new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
