// src/components/BookmarkSidebar.jsx
import React from 'react';
import { Card, Flex, Text, Link as RadixLink } from '@radix-ui/themes';
import { ExternalLink } from 'lucide-react'; // opsional, untuk ikon eksternal

// Data contoh bookmark
const bookmarks = [
  { id: 1, title: 'Kembali Mengunjungi Partai Gelora', url: 'https://partaigelora.id/' },
  { id: 2, title: 'Geography', url: 'https://www.plonkit.net/' },
  { id: 3, title: 'Grommet', url: 'https://thegrommet.com/' },
  { id: 4, title: 'Vite', url: 'https://vitejs.dev' },
  { id: 5, title: 'React', url: 'https://react.dev' },
];

export default function BookmarkSidebar() {
  return (
    <div
      style={{
        width: '30%',
        minWidth: '250px', // agar tidak terlalu sempit di layar kecil
        height: 'calc(100vh - 80px)', // kurangi tinggi navbar + footer (sesuaikan)
        position: 'fixed',
        top: '60px', // sesuaikan dengan tinggi Navbar Anda
        left: 0,
        padding: '16px',
        overflowY: 'auto',
        zIndex: 10,
        borderRight: '1px solid var(--gray-6)',
        backgroundColor: 'var(--color-panel-solid)',
      }}
    >
      <Text size="5" weight="bold" style={{ marginBottom: '16px' }}>
        Signet
      </Text>
      <Flex direction="column" gap="3">
        {bookmarks.map((bookmark) => (
          <Card
            key={bookmark.id}
            style={{
              padding: '12px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onClick={() => window.open(bookmark.url, '_blank', 'noopener,noreferrer')}
          >
            <Flex align="center" gap="2">
              <Text weight="medium">{bookmark.title}</Text>
              <ExternalLink size={14} style={{ opacity: 0.6 }} />
            </Flex>
            <Text size="1" color="gray" style={{ marginTop: '4px' }}>
              {new URL(bookmark.url).hostname}
            </Text>
          </Card>
        ))}
      </Flex>
    </div>
  );
}