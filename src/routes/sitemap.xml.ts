const currentDate = new Date().toISOString();

const lastMod = {
	index: currentDate,
	imprint: '2021-09-14T13:05:20+00:00'
};

const headers = {
	'Cache-Control': 'max-age=0, s-max-age=600',
	'Content-Type': 'application/xml'
};

const body = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
<loc>https://timo-pruesse.de/</loc>
<lastmod>${lastMod.index}</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://timo-pruesse.de/imprint</loc>
<lastmod>${lastMod.imprint}</lastmod>
<priority>0.80</priority>
</url>
</urlset>`;

export async function get(): Promise<{ body: string; headers: Record<string, string> }> {
	return {
		body,
		headers
	};
}
