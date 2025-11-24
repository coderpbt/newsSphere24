import React from 'react';

const SinglePage = () => {
  return (
    <div>
    <div className="min-h-screen bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500 uppercase">
        HOME &gt; PRESS RELEASE
      </div>

      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Article Body */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Feds steady hand drives Bitcoin toward $100K; ETH, other altcoins surge
          </h1>

          {/* Image */}
          {/* <img
            src="/mnt/data/screencapture-businessmailusa-vercel-app-press-release-feds-steady-hand-drives-bitcoin-toward-100k-eth-other-altcoins-surge-2025-11-24-00_20_07.png"
            alt="Bitcoin"
            className="w-full rounded-lg mt-4"
          /> */}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
            <span className="font-semibold">Created by Admin User</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">ADMIN</span>
            <span className="text-gray-500">Updated: May 8, 2025, 10:20 AM</span>
          </div>

          {/* Article Text */}
          <article className="mt-6 text-sm leading-relaxed text-gray-700 space-y-4">
            <p>
              The crypto market was buzzing in trade after the US Federal Reserve’s Jerome Powell announced to keep the interest
              rates steady at the range of 4.25 per cent and 4.50 per cent, while acknowledging continued economic strength.
              Market analysts believe this has reinforced positive market sentiment for cryptocurrencies.
            </p>
            <p>
              Following the announcement, the flagship cryptocurrency Bitcoin reclaimed the $99,400 level, just 600 points shy of
              the $100,000 mark. It has, however, taken a slight retreat and was quoted trading at around $98,663.98, up by 2.63
              per cent at 11:17 AM on Thursday, May 8.
            </p>
            <p>
              The worlds most popular cryptocurrency had a 24-hour trading volume of $50 billion. Bitcoins market
              capitalisation stood at $1.96 trillion, the highest among all cryptocurrencies. The last 24-hour trading range for
              Bitcoin was between $95,829.33 and $99,460.51, according to data from CoinMarketCap.
            </p>
            <p>
              Bullish momentum may push Bitcoin beyond $100,000. This bullish movement, Piyush Walke — derivatives research
              analyst at Delta Exchange — said, is likely to sustain as investors are increasingly viewing Bitcoin as a store of
              value rather than merely a speculative asset.
            </p>
            <p>
              "The Federal Reserves decision not to cut interest rates signals a continued focus on controlling inflation,
              reinforcing a tight monetary policy stance. Bitcoin responded positively to the announcement, rallying by
              approximately 2,000 points. Meanwhile, cumulative inflows into Bitcoin ETFs have reached a new all-time high of
              $40.62 billion, highlighting a sharp rise in institutional participation and further validating Bitcoins role as a
              mainstream investment vehicle said Walke.
            </p>
            <p>
              Sentiments were favorable among other cryptocurrencies as well. Ethereum (ETH), the worlds second-largest
              cryptocurrency by market capitalization, was trading higher by 3.96 per cent at $1,899.90.
            </p>
            <p>
              Bitcoin (BTC), Mog Coin (MOG), Ethereum (ETH), EOS (EOS), Solana (SOL), and Bitcoin Cash (BCH) were among the top
              trending crypto coins on CoinMarketCap.
            </p>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="space-y-10">
          {/* Most Popular */}
          <div>
            <h2 className="text-lg font-semibold text-red-600 mb-4">MOST POPULAR</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="flex gap-3 items-start">
                  <span className="text-red-600 font-bold text-xl">{n}.</span>
                  <p className="text-sm leading-tight">Sample popular headline {n}...</p>
                </div>
              ))}
            </div>
          </div>

          {/* Most Recent */}
          <div>
            <h2 className="text-lg font-semibold text-red-600 mb-4">MOST RECENT</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="flex gap-3 items-start">
                  <span className="text-red-600 font-bold text-xl">{n}.</span>
                  <p className="text-sm leading-tight">Recent update headline {n}...</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
    </div>
  );
};

export default SinglePage;