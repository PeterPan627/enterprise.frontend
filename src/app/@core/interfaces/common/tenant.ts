export interface Tenant {
    name: string;
    logo: string;
    logoHorizontal: string;
    theme: string;
    features: Feature[];
    api: string;
    homePage: string;
}

export interface Feature {
    name: string;
    api: string;
}
