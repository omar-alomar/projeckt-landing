import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Projeckt — Project management for teams that build';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#FAFAF9',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: '#4F46E5',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                fontWeight: 700,
              }}
            >
              P
            </div>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#1C1917',
                letterSpacing: '-0.02em',
              }}
            >
              Projeck
              <span style={{ color: '#8B5CF6' }}>t</span>
            </span>
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#57534E',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.4,
            }}
          >
            Project management for engineering firms
            and land developers
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#8B5CF6',
              fontWeight: 500,
            }}
          >
            Built-in property data lookup · Team dashboards · Milestone tracking
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
