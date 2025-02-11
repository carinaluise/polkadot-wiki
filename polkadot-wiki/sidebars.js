module.exports = {
  docs: [
    {
      type: "category",
      label: "General",
      link: {
        type: 'generated-index',
        title: 'General Information',
        description: 'General Information to get started with Polkadot & Web3.',
        slug: '/general',
      },
      items: [
        "general/getting-started",
        {
          type: "category",
          label: "Stay Safe",
          description: 'Good-practices to stay safe while surfing in Web3.',
          link: {
            type: 'generated-index',
            title: 'Stay Safe',
            description: 'Learn about good-practices to stay safe while surfing in Web3.',
            slug: '/stay-safe',
          },
          items: [
            "general/scams",
            "general/how-to-dyor",
          ],
        },
        {
          type: "category",
          label: "Wallets",
          description: 'Wallet options in the Polkadot and Kusama ecosystems.',
          link: {
            type: 'generated-index',
            title: 'Wallets',
            description: 'Explore the different wallet options in the Polkadot and Kusama ecosystems.',
            slug: '/wallets',
          },
          items: [
            "general/wallets-and-extensions",
            "general/ledger",
            "general/polkadot-vault",
            "general/polkadotjs-ui",
          ],
        },
        {
          type: "category",
          label: "Dashboards",
          description: 'Dashboards in the Polkadot and Kusama ecosystems.',
          link: {
            type: 'generated-index',
            title: 'Dashboards',
            description: 'Explore the different dashboards in the Polkadot and Kusama ecosystems.',
            slug: '/dashboards',
          },
          items: [
            "general/staking-dashboard",
          ],
        },
        "general/polkadotjs",
        {
          type: "category",
          label: "Community & Contributors",
          description: 'Participate in the Polkadot community and contribute to the Wiki.',
          link: {
            type: 'generated-index',
            title: 'Community & Contributors',
            description: 'Learn about how to participate in the Polkadot community and how to contribute to the Polkadot Wiki.',
            slug: '/community-and-contributors',
          },
          items: [
            "general/community",
            "general/contributing",
            "general/contributors",
          ],
        },
        {
          type: "category",
          label: "Programmes",
          description: 'Programmes and initiatives within the Polkadot ecosystem.',
          link: {
            type: 'generated-index',
            title: 'Programmes',
            description: 'Learn about different programmes and initiatives within the Polkadot and Kusama ecosystems.',
            slug: '/programmes',
          },
          items: [
            "general/grants",
            "general/bug-bounty",
            "general/ambassadors",
            "general/builders-program",
            "general/doc-thousand-validators",
            "general/doc-thousand-contributors",
          ],
        },
        "general/research",
        "general/metadata",
        "general/faq",
        "general/glossary",
      ],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        "learn/learn-index",
        {
          type: "category",
          label: "Basics",
          items: [
            {
              type: "category",
              label: "Accounts",
              items: [
                "learn/learn-accounts",
                "learn/learn-account-generation",
                "learn/learn-identity",
                "learn/learn-account-multisig",
                'learn/learn-proxies',
              ],
            },
            {
              type: "category",
              label: "Transactions",
              items: [
                "learn/learn-extrinsics",
                "learn/learn-balance-transfers",
                "learn/learn-transaction-fees",
              ],
            },
            {
              type: "category",
              label: "Tokens and Assets",
              items: [
                "learn/learn-assets",
                "learn/learn-DOT",
                "learn/learn-teleport",
              ],
            },
            {
              type: "category",
              label: "NFTs",
              items: [
                "learn/learn-nft",
                "learn/learn-nft-projects",
              ],
            },
            {
              type: "category",
              label: "Components",
              items: [
                "learn/learn-polkadot-host",
                'learn/learn-wasm',
                "learn/learn-runtime-upgrades",
                "learn/learn-polkadot-opengov",
                "learn/learn-treasury",
                "learn/learn-consensus",
              ],
            },
            {
              type: "category",
              label: "Staking",
              items: [
                "learn/learn-staking",
                "learn/learn-nomination-pools",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            'learn/learn-account-advanced',
            "learn/learn-staking-advanced",
            "learn/learn-nft-pallets",
            "learn/learn-cryptography",
            'learn/learn-phragmen',
            {
              type: "category",
              label: "How-to Guides",
              items: [
                "learn/learn-guides-staking",
                "learn/learn-guides-identity",
                {
                  type: "category",
                  label: "Asset Hub",
                  items: [
                    "learn/learn-guides-assets-create",
                    "learn/learn-guides-assets-ledger"
                  ],
                },
                "learn/learn-guides-vault",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Architecture",
          items: [
            "learn/learn-architecture",
            "learn/learn-nominator",
            "learn/learn-validator",
            "learn/learn-collator",
            {
              type: "category",
              label: "Parachains",
              items: [
                "learn/learn-parachains",
                "learn/learn-parachains-protocol",
                "learn/learn-system-chains",
                "learn/learn-auction",
                "learn/learn-crowdloans",
                "learn/learn-parachains-faq",
              ],
            },
            "learn/learn-bridges",
            {
              type: "category",
              label: "Cross Consensus Messaging (XCM)",
              items: [
                'learn/learn-xcm',
                'learn/learn-xcm-pallet',
                'learn/learn-xcm-usecases',
                'learn/learn-xcm-transport',
                'learn/learn-xcvm',
                'learn/learn-xcm-instructions',
              ],
            },
            'learn/learn-spree',
          ],
        },
        {
          type: "category",
          label: "Polkadot Comparisons",
          items: [
            'learn/learn-comparisons-kusama',
            'learn/learn-comparisons-ethereum-2',
            'learn/learn-comparisons-cosmos',
            'learn/learn-comparisons-avalanche',
            'learn/learn-comparisons',
            'learn/learn-comparisons-rollups'
          ],
        },
        "learn/learn-video-tutorials",
        {
          type: "category",
          label: "Future Implementations",
          items: [
            "learn/learn-parathreads",
          ],
        },
        {
          type: "category",
          label: "Archive",
          items: [
            "learn/learn-governance",
            "learn/learn-launch",
            "learn/learn-redenomination",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build/build-index",
        {
          type: "category",
          label: "Development Guide",
          items: [
            "build/build-guide",
            "build/build-parachains",
            "build/build-storage",
            "build/build-smart-contracts",
            "build/build-oracle",
            "build/build-data",
            "build/build-substrate",
            "build/build-ss58-registry",
            "build/build-hrmp-channels",
          ],
        },
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "build/build-integration",
            "build/build-protocol-info",
            "build/build-integrate-assets",
            "build/build-node-management",
            "build/build-node-interaction",
            "build/build-transaction-construction",
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: ["build/build-tools-index", "build/build-open-source"],
        },
        {
          type: "category",
          label: "Resources",
          items: ["build/build-hackathon"],
        },
      ],
    },
    {
      type: "category",
      label: "Maintain",
      items: [
        "maintain/maintain-index",
        "maintain/maintain-polkadot-parameters",
        "maintain/maintain-endpoints",
        {
          type: "category",
          label: "Nodes and Dapps",
          items: [
            "maintain/maintain-sync",
            "maintain/maintain-bootnode",
            "maintain/maintain-rpc",
            "maintain/maintain-wss",
            "maintain/maintain-networks",
            "maintain/maintain-errors",
          ],
        },
        "maintain/maintain-guides-how-to-nominate-polkadot",
        {
          type: "category",
          label: "Validator Guides",
          items: [
            "maintain/maintain-guides-how-to-validate-polkadot",
            "maintain/maintain-guides-validator-payout",
            "maintain/maintain-guides-how-to-systemd",
            "maintain/maintain-guides-secure-validator",
            "maintain/maintain-guides-how-to-upgrade",
            "maintain/maintain-guides-how-to-monitor-your-node",
            "maintain/maintain-guides-how-to-chill",
            "maintain/maintain-guides-how-to-stop-validating",
            "maintain/doc-maintain-guides-validator-community",
            "maintain/maintain-guides-avoid-slashing",
          ],
        },
        {
          type: "category",
          label: "Governance Guides",
          items: [
            "maintain/maintain-guides-democracy",
            "maintain/maintain-guides-polkadot-opengov",
            "maintain/maintain-guides-how-to-join-council",
            "maintain/maintain-guides-how-to-vote-councillor",
          ],
        },
      ],
    },
  ],
};
