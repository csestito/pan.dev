---
id: intro
title: PAN-OS APIs and SDKs
sidebar_label: PAN-OS APIs and SDKs
hide_title: true
description: PAN-OS APIs and SDKs
slug: /panos/docs
keywords:
  - pan-os
  - panos
  - xml
  - rest
  - api
  - firewall
  - configuration
---

# PAN-OS APIs and SDKs
PAN-OS APIs and SDKs allow you to manage next-generation firewalls, directly or via Panorama, using third-party services, applications, or scripts.

## PAN-OS XML API
The [PAN-OS XML API](./xmlapi.md) is a powerful and low-level, allowing you to take full control of every aspect of your security, and build deep integrations with your systems. Make API calls directly on the firewall or from Panorama.

## PAN-OS REST API
The [PAN-OS REST API](./restapi.md) simplifies access to resources as high-level URIs. You can use this API to create, change, and delete resources.

## ```pan-os-python``` (Python)
The [```pan-os-python``` SDK framework](./pan-os-python.md) helps interact with PAN-OS devices. It is object-oriented and mimics the traditional interaction with the device via the GUI, CLI or XML API. It is also part of the underpinnings of the [PAN-OS Ansible collection](../../ansible/panos/docs/).

<!---
## ```pan-python``` (Python)
The [```pan-python``` SDK](./pan-python.md) is a set of powerful, low-level Python packages for interacting with PAN-OS, WildFire, AutoFocus and more. It is also part of the underpinnings of the [PAN-OS Ansible collection](../../ansible/panos/docs/).
-->

## ```pan-os-go``` (Go)
The [```pan-os-go``` SDK](./pan-os-go.md) helps interact with PAN-OS devices, and also serves as the underlying client library for the [PAN-OS Terraform provider](../../terraform/panos/docs/).

## ```pan-os-php``` (PHP)
The [```pan-os-php``` library](./pan-os-php.md) is aimed at making PAN-OS configuration changes easy and maintainable. It also allows for complex scenarios like rule merging, unused object tracking, conversion of checkpoint exclusion groups, large scale rule editing, and App-ID conversion.