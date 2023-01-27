module.exports = {
  prismacloudapi: [
    "prisma-cloud/api/api-reference-home",
    {
      type: "category",
      label: "Cloud Security Posture Management",
      collapsed: true,
      items: [
        "cspm/api/cspm-api",
        "cspm/api/api-urls",
        "cspm/api/api-headers",
        "cspm/api/rate-limits",
        "cspm/api/api-time-range-model",
        "cspm/api/api-integration-config",
        "cspm/api/api-errors",
        require("../cspm/api/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Cloud Workload Protection",
      collapsed: true,
      items: [
        "cwpp/api/cwpp-home",
        "cwpp/api/stable-endpoints",
        require("../cwpp/api/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Cloud Code Security",
      collapsed: true,
      items: [
        "code/api/code",
        "code/api/basic-request",
        "code/api/api-headers",
        require("../code/api/sidebar"),
      ],
    },
  ],
  clouddocs: [
    {
      type: "autogenerated",
      dirName: "prisma-cloud/docs",
    },
    {
      type: "category",
      label: "Other Documentation",
      items: [
        {
          type: "link",
          label: "Administrator's Guide",
          href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin.html",
        },
        {
          type: "link",
          label: "Release Information",
          href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/prisma-cloud-release-notes/prisma-cloud-release-information.html",
        },
        {
          type: "link",
          label: "Resource Query Language (RQL)",
          href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-rql-reference/rql-reference.html",
        },
        {
          type: "category",
          label: "Compute 22.12",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/22-12/prisma-cloud-compute-edition-admin.html",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/22-12/prisma-cloud-compute-edition-release-notes/release-information",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 22.06",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/22-06/prisma-cloud-compute-edition-admin.html",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/22-06/prisma-cloud-compute-edition-release-notes/release-information",
            },
          ],
        },
        {
          type: "category",
          label: "Compute 22.01",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/content/techdocs/en_US/prisma/prisma-cloud/22-01/prisma-cloud-compute-edition-admin.html",
            },
            {
              type: "link",
              label: "Release Notes",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/22-01/prisma-cloud-compute-edition-release-notes/release-information",
            },
          ],
        },
        {
          type: "category",
          label: "CWPP",
          items: [
            {
              type: "link",
              label: "Administrator's Guide",
              href: "https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-compute.html",
            },
          ],
        },
      ],
    },
  ],
};
