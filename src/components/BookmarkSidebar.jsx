// src/components/BookmarkSidebar.jsx
import React from 'react';
import { Card, Flex, Text } from '@radix-ui/themes';
import { ExternalLink } from 'lucide-react';

const bookmarks = [
  { id: 1, title: 'eu.org domain', url: 'https://nic.eu.org/' },
  { id: 2, title: 'Geography', url: 'https://www.plonkit.net/' },
  { id: 3, title: 'Grommet', url: 'https://thegrommet.com/' },
  { id: 4, title: 'Data Real Time Demokrasi Global', url: 'https://ourworldindata.org/democracy' },
  { id: 5, title: 'Identifikasi Serangga', url: 'https://www.buglife.org.uk/bugs/identify-a-bug/' },
  { id: 6, title: 'Live Storm Chasing', url: 'https://livestormchasing.com/' },
  { id: 7, title: 'Tech Blog', url: 'https://blog.ic3dt3a.org//' },
];

export default function BookmarkSidebar() {
  return (
    <div
      className="bookmark-sidebar-scroll"
      style={{
        width: '30%',
        minWidth: '250px',
        height: 'calc(100vh - 80px)',
        position: 'fixed',
        top: '60px',
        left: 0,
        padding: '20px',
        overflowY: 'auto',
        zIndex: 10,
        borderRight: '1px solid var(--gray-a6)',
        
        boxSizing: 'border-box',
      }}
    >
      {/* Judul dengan margin bawah eksplisit */}
      <div style={{ marginBottom: '24px' }}>
        <Text size="5" weight="bold" style={{ color: 'var(--green-11)' }}>
          Signet
        </Text>
      </div>

      <Flex direction="column" gap="3">
        {bookmarks.map((bookmark) => (
          <Card
            key={bookmark.id}
            style={{
              padding: '14px',
              cursor: 'pointer',
              borderRadius: '8px',
              backgroundColor: 'var(--color-panel)',
              transition: 'background-color 0.2s ease',
            }}
            onClick={() =>
              window.open(bookmark.url.trim(), '_blank', 'noopener,noreferrer')
            }
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--gray-a3)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--color-panel)')
            }
          >
            <Flex align="center" gap="2">
              <Text weight="medium">{bookmark.title}</Text>
              <ExternalLink size={14} style={{ color: 'var(--green-9)', opacity: 0.7 }} />
            </Flex>
            <Text size="1" color="gray" style={{ marginTop: '6px' }}>
              {new URL(bookmark.url.trim()).hostname}
            </Text>
          </Card>
        ))}
      </Flex>
    </div>
  );
}