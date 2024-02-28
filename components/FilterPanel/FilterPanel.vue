<script lang="ts" setup></script>

<template>
  <div class="space-y-4">
    <FilterPanelItem label="Sort">
      <ProductFilterSort />
    </FilterPanelItem>
    <FilterPanelItem label="Search by name">
      <ProductFilterSearch />
    </FilterPanelItem>
    <UDivider />
    <FilterPanelItem label="Rating">
      <ProductFilterRating />
    </FilterPanelItem>
    <UDivider />
    <FilterPanelItem label="Price">
      <ProductFilterPrice />
    </FilterPanelItem>
  </div>
  <!-- <div>
    <form class="space-y-10 divide-y divide-gray-200">
      <div
        v-for="(section, sectionIdx) in filters"
        :key="section.name"
        :class="sectionIdx === 0 ? null : 'pt-10'"
      >
        <fieldset>
          <legend class="block text-sm font-medium text-gray-900">
            {{ section.name }}
          </legend>
          <div class="pt-6">
            <div
              v-for="(option, optionIdx) in section.options"
              :key="option.value"
              class="flex items-center"
            >
              <input
                :id="`${section.id}-${optionIdx}`"
                :name="`${section.id}[]`"
                :value="option.value"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                :for="`${section.id}-${optionIdx}`"
                class="ml-3 text-sm text-gray-600"
                >{{ option.label }}</label
              >
            </div>
          </div>
        </fieldset>
      </div>
    </form>
  </div> -->
</template>
