export interface FormatLocationDataInput {
  country_name?: string;
  region?: string;
  city?: string;
  ip?: string;
  postal_code?: string;
  [key: string]: unknown;
}

export interface FormattedLocationData {
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  query?: string;
}

export const formatLocationData = (data: FormatLocationDataInput): FormattedLocationData => {
  const { country_name, region, city, ip, postal_code } = data;
  return {
    country: country_name,
    region: region,
    city: city,
    zip: postal_code,
    query: ip,
  };
};
